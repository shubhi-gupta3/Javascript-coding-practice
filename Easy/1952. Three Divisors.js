//1952. Three Divisors

/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
    if (n <= 2) {
        return false;
    }
    let factors = 1;
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            factors++;
        }
        if (factors > 3) {
            return false;
        }
    }
    return factors === 3;
};

console.log(isThree(4)); // false