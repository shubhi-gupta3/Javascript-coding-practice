//2579. Count Total Number of Colored Cells

/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function (n) {
    // area is increasing from top like 1, 3, 5... and then after middle portion it starts decreasing as 5,3,1. 
    let mid = 2 * n - 1;
    let sum = 2 * (n - 1) * (n - 1);
    return sum + mid;
};