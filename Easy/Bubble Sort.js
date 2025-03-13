// Bubble Sort

function bubbleSort(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
    return nums;
}

console.log(bubbleSort([5, 2, 3, 1, 4])); // [1, 2, 3, 4, 5]