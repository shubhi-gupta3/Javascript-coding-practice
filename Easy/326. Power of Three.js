// 326. Power of Three

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if (n <= 0) {
        return false;
    }
    let exponent = Math.log10(n) / Math.log10(3);
    return exponent === Math.floor(exponent);
};