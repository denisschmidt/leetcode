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

// Time O(N)
// Space O(1)
const maxProfit = (prices, fee) => {
  // Если я не владею акцией после сегодняшнего дня, то либо у меня не было акции вчера,
  // либо у меня была акция вчера, но я решил продать ее сегодня: price_0 = max(price_0, price_1 + price[i] - fee)
  let price_0 = 0;

  // Если я держу акцию после сегодняшнего дня, то либо я просто продолжаю владеть акцией, которая была у меня вчера,
  // либо я не держал акции вчера, но купил одну акцию сегодня: price_1 = max(price_1, price_0 - price[i])
  let price_1 = -Number.MAX_VALUE; // акция остается после текущего дня

  /*
    1) 
      let oldPrice_0 = price_0;
      price_0 = Math.max(price_0, price_1 + prices[i]);
      price_1 = Math.max(price_1, oldPrice_0 - prices[i] - fee);

    2) 
      let oldPrice_0 = price_0;
      price_0 = Math.max(price_0, price_1 + prices[i] - fee);
      price_1 = Math.max(price_1, oldPrice_0 - prices[i]);


    Обратите внимание, у нас есть два варианта относительно того, когда вычитать плату. 
    Это связано с тем, что (как я уже упоминал выше) каждая транзакция характеризуется двумя действиями в паре - покупка и продажа.
    
    Плата может быть выплачена либо при покупке акций (соответствует первому набору уравнений), 
    либо при продаже (соответствует второму набору уравнений). НО взымается только ОДИН раз!
    
  */

  for (let i = 0; i < prices.length; i++) {
    let oldPrice_0 = price_0;

    price_0 = Math.max(price_0, price_1 + prices[i] - fee); // операция удержания или продажи
    price_1 = Math.max(price_1, oldPrice_0 - prices[i]); // операция удержания или покупки
  }

  return price_0;
};
