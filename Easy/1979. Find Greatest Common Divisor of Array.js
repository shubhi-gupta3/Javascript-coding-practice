//1979. Find Greatest Common Divisor of Array

/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    let a = Math.min(...nums);
    let b = Math.max(...nums);
    return gcd(a, b);
};

function gcd(a, b) {
    return b ? gcd(b, a % b) : a
}