//2108. Find First Palindromic String in the Array

/* Approach : Using Two Pointer Approach
    Time complexity: O(n * m)
    Space complexity: O(1)
*/

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
    for (let word of words) {
        let i = 0, j = word.length - 1, flag = 0;
        while (i <= j) {
            if (word[i] === word[j]) {
                flag = 1;
                i++;
                j--;
            } else {
                flag = 0;
                break;
            }
        }
        if (flag === 1) {
            return word;
        }
    }
    return "";
};