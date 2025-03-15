//283. Move Zeroes

/*
    * Approach: Two Pointers
    * Time complexity: O(n)
    * Space complexity: O(1)
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0; 
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j++;
        }
    }
};

console.log(moveZeroes([1,2,0,3]));