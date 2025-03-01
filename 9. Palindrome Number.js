/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;
    let temp = x;
    let ans = 0;
    while (temp) {
        let r = temp % 10;
        ans = ans * 10 + r;
        temp = Math.floor(temp / 10);
    }
    return ans === x;
};