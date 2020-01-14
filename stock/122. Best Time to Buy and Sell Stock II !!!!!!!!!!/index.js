/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. 
You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:
  Input: [7,1,5,3,6,4]
  Output: 7
  Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

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

// Time O(N)
const maxProfit = function(prices) {
  let ans = 0;

  for (let start = 0; start < prices.length; start++) {
    if (prices[start + 1] > prices[start]) ans += prices[start + 1] - prices[start];
  }
  return ans;
};

const res = maxProfit([7, 1, 5, 3, 6, 4]);
console.log('---', res);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N)
const maxProfit2 = function(prices) {
  if (prices == null || prices.length <= 1) return 0;
  let min = prices[0];
  let max = prices[0];
  let ans = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] <= max) {
      ans += max - min;
      min = max = prices[i];
    } else if (prices[i] > max) {
      max = prices[i];
    }
  }

  if (min !== max) {
    ans += max - min;
  }

  return ans;
};

const res2 = maxProfit2([1, 2, 3, 4, 5]);
console.log('---', res2);
