// 2460. Apply Operations to an Array

/* Approach 1:
    1. Create an empty array res to store the final result
    2. Create a variable zeroes to store the number of zeroes in the array
    3. Loop through the array and check if the current element is equal to the next element
    4. If it is, double the current element and set the next element to 0
    5. Loop through the array again and push all non-zero elements to the res array
    6. Push the remaining zeroes to the res array
    7. Return the res array

    Time complexity: O(n)
    Space complexity: O(n)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
    let res = [];
    let zeroes = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }
    for (let num of nums) {
        if (num) {
            res.push(num);
        } else {
            zeroes++;
        }
    }
    return res.concat(new Array(zeroes).fill(0))
};

/* Approach 2:
    1. Create a variable zeroes to store the number of zeroes in the array
    2. Loop through the array and check if the current element is equal to the next element
    3. If it is, double the current element and set the next element to 0
    4. Loop through the array again and push all non-zero elements to the res array
    5. Push the remaining zeroes to the res array
    6. Return the res array

    Time complexity: O(n)
    Space complexity: O(1)
*/

var applyOperations = function (nums) {
    let zeroes = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            [nums[i], nums[zeroes]] = [nums[zeroes], nums[i]];
            zeroes++;
        }
    }
    return nums;
};