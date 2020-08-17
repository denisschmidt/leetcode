/*

Given an array of 4 digits, return the largest 24 hour time that can be made.

The smallest 24 hour time is 00:00, and the largest is 23:59.  

Starting from 00:00, a time is larger if more time has elapsed since midnight.

Return the answer as a string of length 5.  If no valid time can be made, return an empty string.

Example 1:
  Input: [1,2,3,4]
  Output: "23:41"

Example 2:
  Input: [5,5,5,5]
  Output: ""
  
Note:
  A.length == 4
  0 <= A[i] <= 9

*/ /*

Given an array of 4 digits, return the largest 24 hour time that can be made.

The smallest 24 hour time is 00:00, and the largest is 23:59.  

Starting from 00:00, a time is larger if more time has elapsed since midnight.

Return the answer as a string of length 5.  If no valid time can be made, return an empty string.

Example 1:
  Input: [1,2,3,4]
  Output: "23:41"

Example 2:
  Input: [5,5,5,5]
  Output: ""
  
Note:
  A.length == 4
  0 <= A[i] <= 9

*/

// Time O(4!)
// Space O(4!)
const largestTimeFromDigits = A => {
  let maxTime = -1;
  let res = '';
  let visited = Array(4).fill(false);

  dfs();

  return maxTime == -1 ? '' : res;

  function dfs(comb = []) {
    if (comb.length == 4) {
      let [hour, minute] = buildTime(comb);

      if (hour * 60 + minute > maxTime) {
        maxTime = hour * 60 + minute;

        if (hour == 0) {
          hour += '0';
        } else if (hour <= 9) {
          hour = '0' + hour;
        }

        if (minute == 0) {
          minute += '0';
        } else if (minute <= 9) {
          minute = '0' + minute;
        }

        res = hour + ':' + minute;
      }

      return;
    }

    for (let i = 0; i < A.length; i++) {
      if (visited[i]) continue;
      if (comb.length == 0 && A[i] > 2) continue;
      if (comb.length == 1 && comb[0] == 2 && A[i] > 3) continue;
      if (comb.length == 2 && A[i] > 5) continue;

      comb.push(A[i]);
      visited[i] = true;

      dfs(comb);

      visited[i] = false;
      comb.pop();
    }
  }

  function buildTime([a, b, c, d]) {
    let hour = a * 10 + b;
    let minute = c * 10 + d;
    return [hour, minute];
  }
};
