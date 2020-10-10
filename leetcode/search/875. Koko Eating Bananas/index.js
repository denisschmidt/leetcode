/*

Koko loves to eat bananas.  There are N piles of bananas, the i-th pile has piles[i] bananas.  

The guards have gone and will come back in H hours.

Koko can decide her bananas-per-hour eating speed of K.  

Each hour, she chooses some pile of bananas, and eats K bananas from that pile.  

If the pile has less than K bananas, she eats all of them instead, and won't eat any more bananas during this hour.

Koko likes to eat slowly, but still wants to finish eating all the bananas before the guards come back.

Return the minimum integer K such that she can eat all the bananas within H hours.

Example 1:
  Input: piles = [3,6,7,11], H = 8
  Output: 4

Example 2:
  Input: piles = [30,11,23,4,20], H = 5
  Output: 30

Example 3:
  Input: piles = [30,11,23,4,20], H = 6
  Output: 23
 

Note:
  1 <= piles.length <= 10^4
  piles.length <= H <= 10^9
  1 <= piles[i] <= 10^9

*/

// Time O(N * LogW) где N - количество стопок, а W - максимальный размер стопки.
// Space O(1)
const minEatingSpeed = (piles, H) => {
  let n = piles.length;

  let left = 1;
  let right = 1e9;

  while (left < right) {
    let m = left + Math.floor((right - left) / 2);

    // если мы тратим слишком много времени на сьедение бананов
    // тогда мы увеличиваем значение m, чтобы уменьшить кол-во часов для съедения всех бананов
    if (calc(m) > H) {
      left = m + 1;
    } else {
      right = m;
    }
  }

  return left;

  function calc(m) {
    let cnt = 0;
    for (let p of piles) {
      cnt += Math.floor((p + m - 1) / m);
    }
    return cnt;
  }
};
