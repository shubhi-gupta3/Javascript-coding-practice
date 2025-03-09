//2379. Minimum Recolors to Get K Consecutive Black Blocks

/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
    let start = 0, end = k - 1, min = Infinity;
    while (end < blocks.length) {
        let countW = 0;
        let temp = start;
        while (temp <= end) {
            if (blocks[temp] === 'W') {
                countW++;
            }
            temp++;
        }
        if (min > countW) {
            min = countW;
        }
        start++;
        end++;
    }
    return min;
};