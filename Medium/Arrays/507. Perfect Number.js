// 507. Perfect Number

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    let sum = 0;
    for (let i = 1; i * i <= num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    console.log(sum);

    return sum === num;
};

checkPerfectNumber(28); // true