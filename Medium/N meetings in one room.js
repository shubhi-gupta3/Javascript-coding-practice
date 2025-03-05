//N meetings in one room

/* Approach 1: This returns the maximum number of meetings that can be held in one room along with their meeting numbers
    * Time Complexity: O(nlogn) + O(n)
    * Space Complexity: O(n)
*/
function maxMeetings(start, end) {
    // code here
    let meetings = [];
    let possibleMeetings = [];
    for (let i = 0; i < start.length; i++) {
        meetings.push([start[i], end[i], i]);
    }
    meetings.sort((a, b) => a[1] - b[1]);
    let meetingEndTime = meetings[0][1];
    for (let i = 0; i < meetings.length - 1; i++) {
        if (meetingEndTime < meetings[i + 1][0]) {
            possibleMeetings.push(meetings[i]);
            meetingEndTime = meetings[i + 1][1];
        }
    }
    return possibleMeetings.length + 1;
}

console.log(maxMeetings([1, 3, 0, 5, 8, 5], [2, 4, 6, 7, 9, 9])); // 0