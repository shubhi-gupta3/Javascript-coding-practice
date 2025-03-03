// 2161. Partition Array According to Given Pivot

/*
	Time complexity: O(n)
	Space complexity: O(n)
*/

/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
	let lessThanPivot = [];
	let moreThanPivot = [];
	let pivots = [];
	for (let num of nums) {
		if (num < pivot) {
			lessThanPivot.push(num);
		} else if (num > pivot) {
			moreThanPivot.push(num);
		} else {
			pivots.push(num);
		}
	}
	return lessThanPivot.concat(pivots.concat(moreThanPivot));
};