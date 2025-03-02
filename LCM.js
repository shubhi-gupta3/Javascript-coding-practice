/*
    * Least Common Multiple
    * The least common multiple of two integers is the smallest positive integer that is perfectly divisible by both numbers (without a remainder).
    * For example, the LCM of 8 and 12 is 24.
*/

/*
    Approach 1:
    One way to find the LCM of two numbers is by finding all the multiples of both numbers and then finding the smallest number that is common to both sets of multiples.
*/
function lcm(a, b) {
    for (let i = 1; ; i++) {
        if (b * i % a === 0) return b * i;
    }
}

/*
    Approach 2:
    Another way to find the LCM of two numbers is by using the formula:
    LCM(a, b) = (a * b) / GCD(a, b)
    time complexity of O(log(min(a, b))) due to the Euclidean algorithm used in the gcd function, which is much more efficient. The space complexity remains O(1).
*/

function lcm(a, b) {
    return a * b / gcd(a, b);
}


