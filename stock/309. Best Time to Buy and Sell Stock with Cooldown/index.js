/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. 
You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) 
with the following restrictions:

You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)

Example:
  Input: [1,2,3,0,2]
  Output: 3 
  Explanation: transactions = [buy, sell, cooldown, buy, sell]
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let price_0 = 0;
  let price_1 = -Number.MAX_VALUE;

  for (const price of prices) {
    price_0 = Math.max(price_0, price_1 + price); // sell
    price_1 = Math.max(price_1, price_0 - price); // buy

    console.log(price_0, price_1);
  }

  return price_0;
};

const r = maxProfit([1, 2, 3, 0, 2]);
console.log(r);
