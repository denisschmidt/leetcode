/*

Say you have an array for which the i-th element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:
  Input: [3,3,5,0,0,3,1,4]
  Output: 6
  Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
             Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.

Example 2:
  Input: [1,2,3,4,5]
  Output: 4
  Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.

Example 3:
  Input: [7,6,4,3,1]
  Output: 0
  Explanation: In this case, no transaction is done, i.e. max profit = 0.

*/

/*
  
  Bidirectional Dynamic Programming
  We can divide this problem into two subproblems
  Each subproblem is actually of the same problem of "Best Time to Buy and Sell Stock"

  A naive implementation: Time O(N^2)
  We can divide the sequences into two after enumerate each of the subsequences and use "Best Time to Buy and Sell Stock" solution

  Using bidirectional dynamic programming.
 
  In this problem though, we would use two arrays -> left_profits and right_profits

  Left_profits[i] - hold the maximum profits that one can gain from doing one single transaction on the left subsequence of prices from the index zero to i
  Right_profits[i] - hold the maximum profits that one can gain from doing one single transaction on the right subsequence of the prices from the index i up to N-1

  Now, if we divide the sequence of prices around the element at the index i, into two subsequences 
  With left subsequences as Prices[0], Prices[1], ... Prices[i] and the right subsequence as Prices[i+1], ... Prices[N-1]
  The total maximum profits that we obtain from this division (denoted as max_profits[i]) can be expressed as follows
  max_profits[i] = left_profits[i] + right_profits[i]


  Stocks: [7, 1, 5, 3, 6, 4]
  Left_Profits:   [0, 0, 4, 4, 5, 5]
  Right_Profits:  [5, 5, 3, 3, 0, 0]

*/

// Time O(N)
// Space O(N)
const maxProfit = prices => {
  let n = prices.length;
  let left_profits = Array(n).fill(0);
  let max = 0;
  let INF = Number.MAX_VALUE;
  let left_min = INF;

  for (let i = 0; i < n; i++) {
    if (left_min > prices[i]) {
      left_min = prices[i];
    }
    max = Math.max(max, prices[i] - left_min);
    left_profits[i] = max;
  }

  let right_max = -INF;
  let right_profits = Array(n).fill(0);
  max = 0;

  for (let i = n - 1; i >= 0; i--) {
    if (prices[i] > right_max) {
      right_max = prices[i];
    }
    max = Math.max(max, right_max - prices[i]);
    right_profits[i] = max;
  }

  let res = 0;

  for (let i = 0; i < n; i++) {
    res = Math.max(res, left_profits[i] + right_profits[i]);
  }

  return res;
};

// Time O(2N)
// Space O(N)
const maxProfit_II = prices => {
  let k = 2;
  let dp_0 = Array(k + 1).fill(0);
  let dp_1 = Array(k + 1).fill(-Number.MAX_VALUE);

  for (const price of prices) {
    for (let i = k; i > 0; i--) {
      dp_0[i] = Math.max(dp_0[i], dp_1[i] + price);
      dp_1[i] = Math.max(dp_1[i], dp_0[i - 1] - price);
    }
  }

  return dp_0[k];
};
