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
