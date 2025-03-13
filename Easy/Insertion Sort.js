// Insertion Sort

function insertionSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j > 0; j--) {
            if (nums[j] < nums[j - 1]) {
                let temp = nums[j];
                nums[j] = nums[j - 1];
                nums[j - 1] = temp;
            }
        }
    }
    return nums;
}

console.log(insertionSort([5, 2, 3, 1, 4])); // [1, 2, 3, 4, 5]