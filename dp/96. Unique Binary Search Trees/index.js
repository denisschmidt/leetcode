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


  F(i, n) = G(i - 1) * G(n - i) ======>  This is Solution this Problem Main Equation

  // 2
  dp[2] = dp[0] * dp[1]
  dp[2] = dp[1] * dp[0]

  //3
  dp[2] = dp[0] * dp[1]
  dp[2] = dp[1] * dp[0]
         =====> 2

  dp[3] = dp[0] * dp[2] = 2
  dp[3] = dp[1] * dp[1] = 3
  dp[3] = dp[2] * dp[0] = 2

          ====> 5

 */

// Complexity Analysis
//
// Time Complexity: O(N^2)
//
// Space Complexity: O(N)
const numTrees2 = function(size) {
  const dp = new Array(size + 1).fill(0);
  dp[0] = dp[1] = 1;

  // числа Катлана для 0 и для 1 = 1
  // Дальше расчитываем для 2 и т.д пока не дойдем до нашего числа

  for (let n = 2; n <= size; ++n) {
    for (let j = 1; j <= i; ++j) {
      //  All possible unique left BST's count is G[j - 1] if we plant at i.
      //  All possible unique right BST's count is G[i - j] if we plant at i.
      dp[i] += dp[j - 1] * dp[n - j];
    }
  }
  return dp[size];
};

const res2 = numTrees2(3);
console.log('---', res2);
