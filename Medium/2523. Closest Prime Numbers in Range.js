//2523. Closest Prime Numbers in Range

/*
    The time complexity of isNumberPrime function is O(sqrt(n)).
    The space complexity of the function is O(1).
    The time complexity of the closestPrimes function is O(n * sqrt(n)).
    The space complexity of the function is O(n).
    The only difference is that we need to find the closest prime numbers in the given range.
    We can use the isNumberPrime function to find the prime numbers in the given range.
    We can then find the closest prime numbers by iterating through the prime numbers and finding the minimum difference between them.
    We can return the closest prime numbers as the output.
    The time complexity of the solution is O(n * sqrt(n)).
    The space complexity of the solution is O(n).
*/


/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
    let primes = [], minDiff = Infinity, prime1 = 0, prime2 = 0;
    for (let i = left; i <= right; i++) {
        if (isNumberPrime(i)) {
            primes.push(i);
        }
    }
    if (primes.length < 2) {
        return [-1, -1];
    }

    for (let i = 0; i < primes.length - 1; i++) {
        if (minDiff > primes[i + 1] - primes[i]) {
            minDiff = primes[i + 1] - primes[i];
            prime1 = primes[i];
            prime2 = primes[i + 1]
        }
    }
    return [prime1, prime2];
};

function isNumberPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}