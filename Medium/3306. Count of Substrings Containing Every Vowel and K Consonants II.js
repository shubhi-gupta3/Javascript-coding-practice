// 3306. Count of Substrings Containing Every Vowel and K Consonants II

var countOfSubstrings = function (word, k) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let minLength = k + 5, count = 0;
    for (let i = 0; i <= word.length - minLength; i++) {
        let temp = word.slice(i, i + minLength).split('');
        if (temp.length < minLength) {
            break;
        }
        count = checkCondition(temp, vowels, k, count);
    }
    return count;
};

function checkCondition(temp, vowels, k, count) {
    let vowelSet = new Set();
    let consonants = 0;
    for (let j = 0; j < temp.length; j++) {
        if (vowels.has(temp[j])) {
            vowelSet.add(temp[j]);
        } else {
            consonants++;
        }
    }
    if (vowelSet.size === 5 && consonants === k) {
        count++;
    }
    return count;
}

console.log(countOfSubstrings("iqeaouqi", 2));
