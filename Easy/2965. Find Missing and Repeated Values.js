// 2965. Find Missing and Repeated Values
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    let map = new Map();
    let repeatedNumber = 0;
    let n = grid.length;
    for (let row of grid) {
        for (let cell of row) {
            if (!map.has(cell)) {
                map.set(cell, 1);
            } else {
                map.set(cell, map.get(cell)+1);
                repeatedNumber = cell;
            }
        }
    }

    for (let i = 1; i <= n * n; i++) {
        if (!map.get(i)) {
            return [repeatedNumber, i];
        }
    }

};

console.log(findMissingAndRepeatedValues([[9,1,7],[8,9,2],[3,4,6]]));