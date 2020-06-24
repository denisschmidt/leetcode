/*

You are given an array colors, in which there are three colors: 1, 2 and 3.

You are also given some queries. 

Each query consists of two integers i and c, return the shortest distance between the given index i and the target color c. If there is no solution return -1.

Example 1:
  Input: colors = [1,1,2,1,3,2,2,3,3], queries = [[1,3],[2,2],[6,1]]
  Output: [3,0,3]
  Explanation: 
  The nearest 3 from index 1 is at index 4 (3 steps away).
  The nearest 2 from index 2 is at index 2 itself (0 steps away).
  The nearest 1 from index 6 is at index 3 (3 steps away).

Example 2:
  Input: colors = [1,2], queries = [[0,3]]
  Output: [-1]
  Explanation: There is no 3 in the array.
  

Constraints:
  1 <= colors.length <= 5*10^4
  1 <= colors[i] <= 3
  1 <= queries.length <= 5*10^4
  queries[i].length == 2
  0 <= queries[i][0] < colors.length
  1 <= queries[i][1] <= 3

*/

// Time O(N^2)
// Space O(3*N)
const shortestDistanceColor = (colors, queries) => {
  let res = [];
  let n = colors.length;
  let memo = Array(4)
    .fill(0)
    .map(() => Array(n).fill(-1));

  for (let [index, color] of queries) {
    if (memo[color][index] != -1) {
      res.push(memo[color][index]);
    } else {
      let dist = getDist(index, color);

      memo[color][index] = dist;

      res.push(dist);
    }
  }

  return res;

  function getDist(index, color) {
    let left = index - 1;
    let right = index + 1;
    if (colors[index] == color) return 0;

    while (left >= 0 || right < n) {
      if (colors[left] == color) return index - left;
      if (colors[right] == color) return right - index;

      left--;
      right++;
    }
    return -1;
  }
};