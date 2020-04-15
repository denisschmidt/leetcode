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

// Time O(N)
// Space O(N)
const maxProfit = prices => {
  let k = 2;
  let price_0 = Array(k + 1).fill(0);
  let price_1 = Array(k + 1).fill(-Number.MAX_VALUE);

  for (let price of prices) {
    price_0[2] = Math.max(price_0[2], price_1[2] + price);
    price_1[2] = Math.max(price_1[2], price_0[1] - price);

    price_0[1] = Math.max(price_0[1], price_1[1] + price);
    price_1[1] = Math.max(price_1[1], price_0[0] - price);
  }

  return price_0[2];
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
