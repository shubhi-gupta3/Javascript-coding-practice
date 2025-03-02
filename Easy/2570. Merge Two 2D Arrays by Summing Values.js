// 2570. Merge Two 2D Arrays by Summing Values

/* Approach 1
    1. Concatenate both arrays
    2. Create a map to store the sum of values for each key
    3. Iterate through the concatenated array and update the map
    4. Convert the map to an array and sort it by key
    5. Return the sorted array
 */

/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
    let concatArray = nums1.concat(nums2);
    let map = new Map();
    for (let arr of concatArray) {
        if (map.has(arr[0])) {
            map.set(arr[0], map.get(arr[0]) + arr[1]);
        } else {
            map.set(arr[0], arr[1]);
        }
    }
    let res = Array.from(map);
    res.sort((a, b) => a[0] - b[0]);
    return res;
};

/* Approach 2
    1. Create a map to store the sum of values for each key
    2. Iterate through the first array and update the map
    3. Iterate through the second array and update the map
    4. Convert the map to an array and sort it by key
    5. Return the sorted array

    Time Complexity: O((n + m) log (n + m))
    Space Complexity: O(n + m)
 */

/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
    let map = new Map();
    for (let arr of nums1) {
        if (map.has(arr[0])) {
            map.set(arr[0], map.get(arr[0]) + arr[1]);
        } else {
            map.set(arr[0], arr[1]);
        }
    }

    for (let arr of nums2) {
        if (map.has(arr[0])) {
            map.set(arr[0], map.get(arr[0]) + arr[1]);
        } else {
            map.set(arr[0], arr[1]);
        }
    }
    let res = Array.from(map);
    res.sort((a, b) => a[0] - b[0]);
    return res;
};