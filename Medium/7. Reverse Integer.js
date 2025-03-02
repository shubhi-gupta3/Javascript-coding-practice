
/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 * @param {number} x
 * @return {number}
 */

/* Approach 1
    1. Converting the number to string and reversing it
    2. Converting the reversed string back to number
    3. Checking if the number is within the range of 32-bit signed integer
    4. If the number is out of range, returning 0
    5. If the number is within the range, returning the number 
*/
var reverse = function (x) {
    let negativeFlag = x < 0 ? true : false;
    if (negativeFlag) {
        x *= -1;
    }
    let xStr = x.toString();
    if (negativeFlag) {
        let val = +([...xStr].reverse().join('')) * -1;
        return val < -1 * 2 ** 31 ? 0 : val;
    }
    let val = +([...xStr].reverse().join(''));
    return val > 2 ** 31 - 1 ? 0 : val;
};

/* Approach 2
    1. Reversing the number using modulo operator
    2. Checking if the number is within the range of 32-bit signed integer
    3. If the number is out of range, returning 0
    4. If the number is within the range, returning the number 
*/
var reverse = function (x) {
    let negativeFlag = x < 0 ? true : false;
    if (negativeFlag) {
        x *= -1;
    }
    let val = 0;
    while (x > 0) {
        val = val * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    if (negativeFlag) {
        val *= -1;
    }
    return val > 2 ** 31 - 1 || val < -1 * 2 ** 31 ? 0 : val;
};