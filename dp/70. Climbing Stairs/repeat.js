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

// Complexity Analysis
//
// Time complexity : O(n)O. Single loop upto n.
//
// Space complexity : O(n). dp array of size n is used.
const climbStairs = function(n) {
  const dp = [];
  dp[0] = 1;

  if (n === 0) {
    return 0;
  }
  for (let i = 1; i < n; i++) {
    dp[i] = i >= 2 ? dp[i - 1] + dp[i - 2] : dp[i - 1] + 1;
  }
  return dp[n - 1];
};

const res = climbStairs(6);
console.log('---', res);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// In the above approach we have used dp array where dp[i]=dp[i-1]+dp[i-2]
// It can be easily analysed that dp[i]is nothing as fibonacci number.
//
// Fib(n)=Fib(n-1)+Fib(n-2)
//

// Complexity Analysis
//
// Time complexity : O(n).
// Space complexity : O(1)O(1). Constant space is used.
const climbStairs2 = function(n) {
  if (n == 1) {
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

const res2 = climbStairs2(6);
console.log('---', res2);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Complexity Analysis
//
// Time complexity : O(n)
//
// Space complexity : O(n)

// We can store the result at each step in memom array
// and directly returning the result from the memo array whenever that function is called again.

// In this way we are pruning recursion tree with the help of memo array and reducing the size of recursion tree upto N.
const climbStairsMemo = function(n, memo = []) {
  if (n === 0 || n === 1) return 1;

  if (!memo[n]) memo[n] = climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo);

  return memo[n];
};
