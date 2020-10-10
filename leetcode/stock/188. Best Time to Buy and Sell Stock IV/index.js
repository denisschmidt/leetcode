/*

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most k transactions.

Note:
You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

Example 1:
  Input: [2,4,1], k = 2
  Output: 2
  Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.

Example 2:
  Input: [3,2,6,5,0,3], k = 2
  Output: 7
  Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4.
             Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.

 */

// Time O(N*K)
// Space O(K)
const maxProfit = (k, prices) => {
  /*
    Выгодная сделка занимает не менее двух дней (покупка в один день и продажа в другой при условии, что цена покупки меньше цены продажи). 
    
    Если длина массива цен равна n, максимальное количество прибыльных транзакций равно n / 2 (целочисленное деление). 
    После этого прибыльная сделка невозможна, то есть максимальная прибыль останется прежней. 
    
    Следовательно, критическое значение k равно n / 2. 
    
    Если заданное k не меньше этого значения, то есть k> = n / 2, мы можем расширить k до положительной бесконечности.

  */
  if (k >= prices.length >> 1) {
    let price_0 = 0;
    let price_1 = -Number.MAX_VALUE;

    for (const price of prices) {
      price_0 = Math.max(price_0, price_1 + price);
      price_1 = Math.max(price_1, price_0 - price);
    }

    return price_0;
  }

  let dp_0 = Array(k + 1).fill(0);
  let dp_1 = Array(k + 1).fill(-Number.MAX_VALUE);

  for (const price of prices) {
    for (let i = k; i > 0; i--) {
      dp_0[i] = Math.max(dp_0[i], dp_1[i] + price); // холд или продажа
      dp_1[i] = Math.max(dp_1[i], dp_0[i - 1] - price); // холд или покупка
    }
  }

  return dp_0[k];
};
