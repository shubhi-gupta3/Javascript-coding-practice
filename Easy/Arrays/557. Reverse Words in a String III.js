// 557. Reverse Words in a String III

/** Approach: Split the string by space, reverse each word and join them back 
 * Time complexity: O(n*m)
 * Space complexity: O(n+m)
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let words = s.split(' ');
    let newWords = [];
    for (let word of words) {
        let wordArr = word.split('');
        let i = 0, j = wordArr.length - 1;
        while (i <= j) {
            let temp = wordArr[i];
            wordArr[i] = wordArr[j];
            wordArr[j] = temp;
            i++;
            j--;
        }
        newWords.push(wordArr.join(''));
    }
    return newWords.join(' ');
};