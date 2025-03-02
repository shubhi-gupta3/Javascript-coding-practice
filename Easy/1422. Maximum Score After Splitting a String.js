/*1422. Maximum Score After Splitting a String

*Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

*The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.
*/


// Solution 1 - Naive (Brute Force) Approach - O(n^2)

var maxScore = function (s) {
    let maxScore = 0;
    for (let i = 1; i < s.length; i++) {
        let zeroes = s.slice(0, i);
        let ones = s.slice(i, s.length);
        let score = 0;
        for (let zero of zeroes) {
            if (zero === '0') {
                score++;
            }
        }
        for (let one of ones) {
            if (one === '1') {
                score++;
            }
        }
        if (score > maxScore) {
            maxScore = score;
        }
    }

    return maxScore;
};

console.log(maxScore("1111")); // 3