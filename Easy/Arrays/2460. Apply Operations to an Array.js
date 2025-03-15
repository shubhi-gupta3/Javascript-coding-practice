//2460. Apply Operations to an Array

/**
 * Approach : Using Two Pointer Approach
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
    let i = 0;
    for (let j = 0; j < nums.length - 1; j++) {
        if (nums[j] === nums[j + 1]) {
            nums[j] *= 2;
            nums[j + 1] = 0;
        }
    }

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != 0) {
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            i++;
        }
    }
    return nums;
};