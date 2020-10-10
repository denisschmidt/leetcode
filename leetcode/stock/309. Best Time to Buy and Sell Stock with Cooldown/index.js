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

// Time O(N)
// Space O(1)
const maxProfit = prices => {
  let price_0 = 0;
  let price_1 = -Number.MAX_VALUE;
  let price_i_2_0 = 0;

  for (const price of prices) {
    /*
      C "перезарядкой" мы не можем покупать в i-й день, если акция продана в (i-1) -й день. 
      Следовательно, во втором приведенном выше уравнении вместо T[i-1][k][0] 
      мы должны фактически использовать T[i-2][k][0], если мы намерены покупать в i-й день. 
      Все остальное остается прежним.
    */
    let oldPrice_i_1_0 = price_0;

    price_0 = Math.max(price_0, price_1 + price); // sell

    // price_i_2_0 - теперь у нас не предыдущий день (i-1), а (i-2)
    price_1 = Math.max(price_1, price_i_2_0 - price); // buy

    price_i_2_0 = oldPrice_i_1_0;
  }

  return price_0;
};

const r = maxProfit([1, 2, 3, 0, 2]);
console.log(r);
