// Second Largest Element in an Array without sorting

function secondLargest(nums) {
    let max = 0, secondMax = 0;
    for(let num of nums) {
        if(num > max) {
            max = num;
        }
        if(num > secondMax && num < max) {
            secondMax = num;
        }
    }
    return secondMax;
}

console.log(secondLargest([12, 35, 1, 10, 34, 1])); // 34