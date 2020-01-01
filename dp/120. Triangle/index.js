/*

Given a triangle, find the minimum path sum from top to bottom. 
Each step you may move to adjacent numbers on the row below.

For example, given the following triangle

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]

The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

Note:

Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.

*/

// Time O(N^2)
// Space O(N)
const minimumTotal = triangle => {
  for (let i = 0; i < triangle.length; i++) {
    if (i === 0) continue;
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        triangle[i][j] += triangle[i - 1][j];
      } else if (j === triangle[i].length - 1) {
        triangle[i][j] += triangle[i - 1][j - 1];
      } else {
        triangle[i][j] += Math.min(triangle[i - 1][j - 1], triangle[i - 1][j]);
      }
    }
  }

  let min = Number.MAX_VALUE;
  for (let i = 0; i < triangle[triangle.length - 1].length; i++) {
    min = Math.min(min, triangle[triangle.length - 1][i]);
  }

  return min;
};
