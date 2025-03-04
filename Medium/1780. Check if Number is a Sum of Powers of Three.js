// 1780. Check if Number is a Sum of Powers of Three

/* Approach: 1
    Ternary number approach
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    while (n > 0) {
        let r = n % 3;
        if (r === 2) return false;
        n = Math.floor(n / 3);
    }
    return true;
};

/* Approach: 2
    Greedy approach
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
    for (let i = 15; i >= 0; i--) {
        let x = Math.pow(3, i);
        if (x <= n) {
            n -= x;
        }
        if (n === 0) {
            return true;
        }
    }
    return false;
};