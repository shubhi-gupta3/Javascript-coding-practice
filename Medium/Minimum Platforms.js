// Minimum Platforms

/*Approach:
    1. Sort the arrival and departure times.
    2. Initialize the platforms required and count of platforms required.
    3. Traverse the arrival and departure times.
    4. If the arrival time is less than or equal to the departure time, increment the count and move to the next arrival time.
    5. If the arrival time is greater than the departure time, decrement the count and move to the next departure time.
    6. Keep track of the maximum count of platforms required.
    7. Return the maximum count of platforms required.

    Time Complexity: O(nlogn)
    Space Complexity: O(1)
*/

function findPlatform(arr, dep) {
    // your code here
    arr.sort((a, b) => a - b);
    dep.sort((a, b) => a - b);
    let platforms = 0;
    let count = 0;
    let i = 0, j = 0;
    while (i < arr.length && j < dep.length) {
        if (arr[i] <= dep[j]) {
            count++;
            i++;
        } else {
            count--;
            j++;
        }
        platforms = Math.max(count, platforms);
    }
    return platforms;
}

console.log(findPlatform([1000, 935, 1100], [1200, 1240, 1130]));