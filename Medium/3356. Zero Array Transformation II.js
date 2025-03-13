// 3356. Zero Array Transformation II

/* Approach 1: Naive Approach 
    - Traverse through the array and for each query, update the array and check if the sum of the array is zero
    - If the sum of the array is zero, return the number of queries
    - If the sum of the array is not zero, return -1
    - Time Complexity: O(n * q)
    - Space Complexity: O(1)
    Getting TLE for this approach
/*

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function (nums, queries) {
    let k = 1, sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    if (sum === 0) return 0;
    for (let query of queries) {
        let l = query[0], r = query[1], val = query[2];
        for (let i = l; i <= r; i++) {
            if (nums[i] <= val) {
                nums[i] = 0;
            } else {
                nums[i] -= val;
            }
        }
        sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
        }
        if (sum != 0) {
            k++;
        } else {
            return k;
        }
    }
    if (sum != 0) {
        return -1;
    }
    return k;
};

/* Approach 2: Still getting TLE (only three test cases are failing -  624/627 passed)
    - Instead of calculating the sum of the array for each query, we can keep track of the sum of the array and update the sum of the array for each query
    - Time Complexity: O(n * q)
    - Space Complexity: O(1)
*/

var minZeroArray = function (nums, queries) {
    let sum = nums.reduce((acc, num) => acc + num, 0);
    if (sum === 0) return 0;

    let k = 0;
    for (let query of queries) {
        let [l, r, val] = query;
        for (let i = l; i <= r; i++) {
            if (nums[i] <= val) {
                sum -= nums[i];
                nums[i] = 0;
            } else {
                sum -= val;
                nums[i] -= val;
            }
        }
        k++;
        if (sum === 0) return k;
    }
    return -1;
};

