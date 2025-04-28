// Two Sum

//Approach 1: Brute Force
// Time Complexity: O(n^2)
// Space Complexity: O(1)
//

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
    }
};

//Approach 2: HashMap
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Time Complexity: O(n)
// Space Complexity: O(n)
var twoSum = function (nums, target) {
    let hashMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        hashMap[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
        if (hashMap[target - nums[i]] && i != hashMap[target - nums[i]]) {
            return [i, hashMap[target - nums[i]]];
        }
    }
};

//Approach 3: HashMap (Optimized)
// Time Complexity: O(n)
// Space Complexity: O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    let hashMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (hashMap.has(target - nums[i])) {
            return [hashMap.get(target - nums[i]), i];
        }
        hashMap.set(nums[i], i);
    }
};


//Approach 4: Sorting and Two Pointers
// Time Complexity: O(nlogn)
// Space Complexity: O(1)
// Valid when index has not to be returned
// Note: This approach is not valid for this problem as we need to return the original indices
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let i = 0, j = nums.length - 1;
    nums.sort((a, b) => a - b);
    while (i != j) {
        let sum = nums[i] + nums[j];
        if (sum === target) {
            return true;
        } else if (sum > target) {
            j--;
        } else if (sum < target) {
            i++;
        }
    }
    return false;
};

console.log(twoSum([3,2,4], 6));
