/*

Your are given an array of integers prices, 
for which the i-th element is the price of a given stock on day i; 
and a non-negative integer fee representing a transaction fee.

You may complete as many transactions as you like, 
but you need to pay the transaction fee for each transaction. 

You may not buy more than 1 share of a stock at a time (ie. you must sell the stock share before you buy again.)

Return the maximum profit you can make.

Example 1:         0  1  2  3  
  Input: prices = [1, 5, 2, 8], fee = 2
  Output: 8
  Explanation: The maximum profit can be achieved by:
    Buying at prices[0] = 1
    Selling at prices[3] = 8
    Buying at prices[4] = 4
    Selling at prices[5] = 9
    The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.

Note:
  0 < prices.length <= 50000.
  0 < prices[i] < 50000.
  0 <= fee < 50000.
  

   0 1 2 3 4 
  ----------
0 | |0|0|0|0
  ----------
1 | |0|2|0|5
  ----------
2 | |0|0|2|1
  ----------
3 | |0|0|0|4 
  ----------
4 | | | | | 
  ----------

SK3-3344-4341-3838-1507-5548
  
*/

var maxProfit = function(prices, fee) {
  let n = prices.length;
  let dp = Array(n + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let sum = prices[j - 1] - prices[i - 1] - fee;

      if (sum > 0) {
        dp[i][j] = sum + dp[i - 1][j - 1];
      } else {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }

  console.log(dp, dp[n - 1][n - 1]);

  return dp[n - 1][n - 1];
};

maxProfit([1, 5, 2, 8], 2);
