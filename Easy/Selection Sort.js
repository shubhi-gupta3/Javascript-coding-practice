/*
    Time Complexity: O(n^2)
    Space Complexity: O(1)
*/

function selectionSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        let minIndex = 0, minVal = Infinity;
        for (let j = i; j < nums.length; j++) {
            if (nums[j] < minVal) {
                minVal = nums[j];
                minIndex = j;
            }
        }
        let temp = nums[i];
        nums[i] = nums[minIndex];
        nums[minIndex] = temp;
    }
    return nums;
}

console.log(selectionSort([5, 2, 3, 1, 4])); // [1, 2, 3, 4, 5]