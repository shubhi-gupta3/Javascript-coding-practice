//13. Roman to Integer


/*Approach 1*/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let numArr = [];
    for (let char of s) {
        numArr.push(romanMap[char]);
    }
    let res = 0;
    for (let i = numArr.length - 1; i > 0; i--) {
        if (numArr[i - 1] < numArr[i]) {
            let temp = numArr[i] - numArr[i - 1];
            res += temp;
            i--;
            if (i === 0) {
                return res;
            }
        } else {
            res += numArr[i];
        }
    }
    res += numArr[0];
    return res;
};

//Approach 2
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        if (i + 1 < s.length && romanMap[s[i]] < romanMap[s[i + 1]]) {
            res -= romanMap[s[i]];
        } else {
            res += romanMap[s[i]];
        }
    }
    return res;
}