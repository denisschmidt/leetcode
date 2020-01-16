/*
Given a matrix mat where every row is sorted in increasing order, return the smallest common element in all rows.

If there is no common element, return -1.

Example 1:
  Input: mat = [[1,2,3,4,5],[2,4,5,8,10],[3,5,7,9,11],[1,3,5,7,9]]
  Output: 5
 
Constraints:
  1 <= mat.length, mat[i].length <= 500
  1 <= mat[i][j] <= 10^4
  mat[i] is sorted in increasing order.

*/

// Time O(K * N * M)
// Space O(1)
const smallestCommonElement = mat => {
  let n = mat.length;
  let m = mat[0].length;

  for (let k = 0; k < m; k++) {
    let val = mat[0][k];

    let i = 1;
    for (; i < n; i++) {
      let j = 0;
      let hasValue = false;
      for (; j < m; j++) {
        if (val === mat[i][j]) {
          hasValue = true;
          break;
        }
      }

      if (!hasValue) {
        break;
      }
    }

    if (i === n) {
      return val;
    }
  }

  return -1;
};
