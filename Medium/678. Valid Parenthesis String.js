// 678. Valid Parenthesis String

/* Approach 1: Brute Force
    * Time Complexity: O(3^n)
    * Space Complexity: O(n)
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    return checkString(s, 0, 0);
};

function checkString(s, index, count) {
    if (count < 0) return false;
    if (index === s.length) return count === 0;
    if (s[index] === '(') return checkString(s, index + 1, count + 1);
    else if (s[index] === ')') return checkString(s, index + 1, count - 1);
    else if (s[index] === '*') return checkString(s, index + 1, count) || checkString(s, index + 1, count + 1) || checkString(s, index + 1, count - 1);
}

/* Approach 2: Optimized Approach
    * Recursive approach is not efficient. We can use min max range to solve this problem.
    * Time Complexity: O(n)
    * Space Complexity: O(1)
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (str) {
    let min = 0, max = 0;
    if (str[0] === ')') {
        return false;
    }
    for (let s of str) {
        if (s === '(') {
            min++;
            max++;
        } else if (s === ')') {
            min--;
            max--;
        } else {
            min--;
            max++;
        }
        if (min < 0) {
            min = 0;
        }
        if (max < 0) {
            return false;
        }
    }
    return min === 0;
};