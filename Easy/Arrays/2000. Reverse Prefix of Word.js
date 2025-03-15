// 2000. Reverse Prefix of Word

/* Approach: Two Pointers
    Time complexity: O(n)
    Space complexity: O(n)
*/

var reversePrefix = function (word, ch) {
    let index = -1;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === ch) {
            index = i;
            break;
        }
    }
    if (index === -1) return word;

    let i = 0;
    let wordArr = word.split("");
    while (i < index) {
        let temp = wordArr[i];
        wordArr[i] = wordArr[index];
        wordArr[index] = temp;
        i++;
        index--;
    }
    return wordArr.join("");
};

console.log(reversePrefix("abcdefd", "d")); // Output: "dcbaef"