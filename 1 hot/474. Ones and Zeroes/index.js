/*

In the computer world, use restricted resource you have to generate maximum benefit is what we always want to pursue.

For now, suppose you are a dominator of m 0s and n 1s respectively. 
On the other hand, there is an array with strings consisting of only 0s and 1s.

Now your task is to find the maximum number of strings that you can form with given m 0s and n 1s. 
Each 0 and 1 can be used at most once.

Example 1:
  Input: Array = {"10", "0001", "111001", "1", "0"}, m = 5, n = 3
  Output: 4
  Explanation: This are totally 4 strings can be formed by the using of 5 0s and 3 1s, which are “10,”0001”,”1”,”0”
 

Example 2:
  Input: Array = {"10", "0", "1"}, m = 1, n = 1
  Output: 2
  Explanation: You could form "10", but then you'd have nothing left. Better form "0" and "1".

Note:
  The given numbers of 0s and 1s will both not exceed 100
  The size of given string array won't exceed 600.
 
*/
// Time: O (l * m * n) Три цикла, где l - длина strs, m и n - количество нулей и единиц соответственно.
// Space O(m *n)

// Это классическая проблема с рюкзаком.
// В этой задаче у нас есть два ранца, один емкостью m, а другой емкостью n.
// «Вес» каждого элемента - это количество единиц и нулей в нем.
// И «ценность» каждого элемента ровно одна, так как мы просто хотим максимизировать количество элементов.
// Поэтому для каждого элемента, cначала мы рассчитываем его вес, а для остальных используем DP.
var findMaxForm = function(strs, m, n) {
  let map = {};

  for (let str of strs) {
    let obj = {};
    for (let s of str) {
      obj[s] = ~~obj[s] + 1;
    }
    map[str] = [obj['0'] || 0, obj['1'] || 0];
  }

  // Обозначает максимальное количество строк
  // Которые могут быть включены в подмножество, если доступны только значения i=0 и j=1.
  let dp = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  for (const str of strs) {
    let [zeroCnt, oneCnt] = map[str];

    // Почему: нужно идти bottom right к top left ?
    // Если мы пойдем top left к bottom right то у нас будет перерасчет
    // И мы должны обновть dp  для каждой строки последовательно
    for (let i = m; i >= zeroCnt; i--) {
      for (let j = n; j >= oneCnt; j--) {
        //
        // Есть два возможных способа сформировать максимальное количество строк с i 0 и j 1 относительно S
        // 1) Мы либо формируем c S.
        // 2) Либо пропускаем его. Если мы пропустим S, dp[i][j] не должен измениться.

        // В противном случае мы формируем S с numZeroes 0(нулями) и numOnes 1(единицами).

        // Мы получаем (i - numZeroes) 0(нулей) и (j - numOnes) 1(единиц) для работы со всеми предыдущими строками.
        // Сколько строк мы можем сформировать с (i - numZeroes) 0(нулями) и (j - numOnes) 1(единицами)
        // Это dp[i - numZeroes][j - numOnes], которая была рассчитана ранее, поэтому просто добавляем 1 к этому результату.
        //
        dp[i][j] = Math.max(1 + dp[i - zeroCnt][j - oneCnt], dp[i][j]);
      }
    }
  }

  console.log(dp);

  return dp[m][n];
};

const res = findMaxForm(['10', '01', '101', '0'], 3, 2);
console.log(res);
