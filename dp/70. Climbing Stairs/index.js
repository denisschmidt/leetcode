/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
  1. 1 step + 1 step
  2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
  1. 1 step + 1 step + 1 step
  2. 1 step + 2 steps
  3. 2 steps + 1 step

 */

// Time O(N)
// Space O(N)
const climbStairs = function(n) {
  if (n === 1) {
    return 1;
  }
  const matrix = Array(n).fill(0);

  matrix[1] = 1;
  matrix[2] = 2;

  for (let i = 3; i <= n; i++) {
    matrix[i] = matrix[i - 1] + matrix[i - 2];
  }

  return matrix[n];
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(1)
// Space O(1)
const climbStairs1 = function(n) {
  const sqrt5 = Math.sqrt(5);
  const fibn = Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1);
  return Math.round(fibn / sqrt5);
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Time: O(n).
// Space: O(1)
const climbStairs2 = function(n) {
  if (n === 1) {
    return 1;
  }
  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Time: O(n)
// Space: O(n)
const climbStairsMemo = function(n, memo = []) {
  if (n === 0 || n === 1) return 1;

  if (!memo[n]) memo[n] = climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo);

  return memo[n];
};
