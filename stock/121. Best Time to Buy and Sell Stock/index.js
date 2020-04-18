/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:
  Input: [7,1,5,3,6,4]
  Output: 5
  Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.

Example 2:
  Input: [7,6,4,3,1]
  Output: 0
  Explanation: In this case, no transaction is done, i.e. max profit = 0.

 */

// Если у нас возрастающая последовательность то мы идет от самого мин значения до максимума и считаем самую большую разницу
// Если есть минимум еще меньше то берем его и повторяет условие 1

// Time O(N)
// Space O(1)
const maxProfit = function(prices) {
  let cur = prices[0];
  let ans = -Number.MAX_VALUE;

  for (let i = 1; i < prices.length; i++) {
    if (cur > prices[i]) {
      cur = prices[i];
    } else {
      ans = Math.max(ans, prices[i] - cur);
    }
  }

  return ans == -Number.MAX_VALUE ? 0 : ans;
};
