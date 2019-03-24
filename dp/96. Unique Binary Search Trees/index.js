/*
Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

Example:

Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3

 Video solution => https://www.youtube.com/watch?v=GgP75HAvrlY

 */

// DP SOLUTION EASY TO UNDERSTAND
/**
 * @param {number} n
 * @return {number}
 */
/*
  n = 2 ( 1, 2) ===> Answer equal 2 Catalan numbers

     1
   /  \
 null   2

    2
 /   \
1    null


  n = 3 (1, 2, 3)
   1     1
    \      \
     3     2
    /       \
   2         3

      3     3
     /     /
   2      1
  /       \
 1         2

    2
   / \
 1    3

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 The n(th) Catalan number

 G(n) = F(1, 3) + F(2, 3) + F(3, 3)

              G(3)
         /  \       \
    F(1,3)  F(2,3)   F(3,3)
    /    \    /    \    /   \
  G(0)  G(2) G(1) G(1) G(2) G(0)

  F(i, n) = G(i - 1) * G(n - i)

  // 2
  dp[2] = dp[1] * dp[0]
  dp[2] = dp[0] * dp[1]

  //3
  dp[2] = dp[1] * dp[0]
  dp[2] = dp[0] * dp[1]
         =====> 2

  dp[3] = dp[2] * dp[0] = 2
  dp[3] = dp[1] * dp[1] = 3
  dp[3] = dp[0] * dp[2] = 2
          ====> 5

 */

// Complexity Analysis
//
// Time Complexity: O(N^2)
//
// Space Complexity: O(N)
const numTrees2 = function(n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = dp[1] = 1;

  // числа Катлана для 0 и для 1 = 1
  // Дальше расчитываем для 2 и т.д пока не дойдем до нашего числа

  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j <= i; ++j) {
      //  All possible unique left BST's count is G[j - 1] if we plant at i.
      //  All possible unique right BST's count is G[i - j] if we plant at i.
      dp[i] += dp[i - j] * dp[j - 1];
    }
  }
  return dp[n];
};

const res2 = numTrees2(3);
console.log('---', res2);
