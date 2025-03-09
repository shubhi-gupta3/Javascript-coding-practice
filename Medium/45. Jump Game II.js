/* Approach:
    1. Initialize l = 0, r = 0, jumps = 0.
    2. Iterate over the array from l to r and find the farthest index we can reach.
    3. Update l = r + 1 and r = farthest.
    4. Increment jumps by 1.
    5. Repeat the above steps until r < nums.length - 1.
    6. Return jumps.

    Time Complexity: O(n)
    Space Complexity: O(1)
*/
/**
 * @param {number[]} nums
 * @return {number}
 */

var jump = function (nums) {
    let l = 0, r = 0, jumps = 0;
    while (r < nums.length - 1) {
        let farthest = 0;
        for (let i = l; i <= r; i++) {
            farthest = Math.max(farthest, i + nums[i]);
        }
        l = r + 1;
        r = farthest;
    }
    return jumps;
};
