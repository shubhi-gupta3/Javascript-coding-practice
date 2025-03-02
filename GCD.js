/*
    GCD / HCF of a number
    The greatest common divisor (GCD) of two numbers is the largest number that divides both of them with no remainder.
    The factors of a number are all the numbers that divide the number with no remainder.
    For example, the GCD of 8 and 12 is 4.
*/

/*
    Approach 1:
    One way to find the GCD of two numbers is by finding all the factors of both numbers and then finding the largest number that is common to both sets of factors.

    factors(n):
    Time Complexity: O(sqrt(n))
    Space Complexity: O(sqrt(n))

    gcd(a, b):
    Time Complexity: O(sqrt(a) * sqrt(b))
    Space Complexity: O(sqrt(a) + sqrt(b))
*/

function gcd(a,b) {
    let commonFactors = [...factors(a)].filter(x => factors(b).has(x));
    return Math.max(...commonFactors);
}

function factors(n) {
    let factors = new Set();
    for (let i = 1; i*i <= n; i++) {
        if (n % i === 0) factors.add(i);
    }
    return factors;
}


/*
    Approach 2:
    Another way to find the GCD of two numbers is by using the Euclidean algorithm.
    The Euclidean algorithm is based on the principle that the GCD of two numbers also divides their difference.
    For example, the GCD of 8 and 12 is the same as the GCD of 4 and 8.

    Assumption here is that a > b
    gcd(a, b):
    Time Complexity: O(log(min(a, b)))
    Space Complexity: O(1)
*/

function gcd(a,b) {
    while (b) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

/*

    Approach 3:
    The Euclidean algorithm can also be implemented recursively. 
    Assumption here is that a > b       
    gcd(a, b):
    Time Complexity: O(log(min(a, b)))
    Space Complexity: O(log(min(a, b)))
*/

function gcd(a,b) {
    return b ? gcd(b, a % b) : a;
}