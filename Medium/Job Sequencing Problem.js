// Job Sequencing Problem

/* Approach: 
    1. Create an array of jobs with id, deadline, and profit.
    2. Sort the jobs in descending order of profit.
    3. Find the maximum deadline.
    4. Create an array of slots with the maximum deadline and initialize all slots to false.
    5. Traverse the jobs array.
    6. For each job, traverse the slots array from the deadline - 1 to 0.
    7. If the slot is empty, assign the slot to the job and add the profit to the total profit.
    8. Return the count of jobs and the total profit.

    Time Complexity: O(nlogn)
    Space Complexity: O(maxDeadline)
*/
function jobSequencing(id, deadline, profit) {
    // code here..
    let count = 0, totalProfit = 0;
    let job = [];
    for (let i = 0; i < deadline.length; i++) {
        job.push([id[i], deadline[i], profit[i]]);
    }
    job.sort((a, b) => b[2] - a[2]);

    let maxDeadline = -1;
    for (let i = 0; i < job.length; i++) {
        maxDeadline = Math.max(maxDeadline, job[i][1]);
    }
    let slots = new Array(maxDeadline).fill(false);
    for (let i = 0; i < job.length; i++) {
        for (let j = job[i][1] - 1; j >= 0; j--) {
            if (!slots[j]) {
                slots[j] = true;
                count++;
                totalProfit += job[i][2];
                break;
            }
        }
    }
    return [count, totalProfit];
}

console.log(jobSequencing([1, 2, 3, 4], [4, 1, 1, 1], [20, 10, 40, 30]));
let ids = [1, 2, 3, 4, 5];
let deadlines = [2, 1, 2, 1, 1];
let profits = [100, 19, 27, 25, 15];

console.log(jobSequencing(ids, deadlines, profits));