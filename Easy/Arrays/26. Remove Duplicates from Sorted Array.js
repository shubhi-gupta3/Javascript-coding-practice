// 26. Remove Duplicates from Sorted Array

/* Approach 1: Using Set -- Naive Approach 
    Time Complexity: O(n)
    Space Complexity: O(n)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let set = new Set();
    for (let num of nums) {
        set.add(num);
    }
    set = Array.from(set);
    for (let i = 0; i < nums.length; i++) {
        nums[i] = set[i];
    }

    return set.length;
};

/* Approach 2: Using Two Pointer Approach 
    Time Complexity: O(n)
    Space Complexity: O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] != nums[j]) {
            nums[i + 1] = nums[j];
            i++;
        }
    }
    return i + 1;
};