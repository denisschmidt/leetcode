/*

In the "100 game," two players take turns adding, to a running total, any integer from 1..10. 
The player who first causes the running total to reach or exceed 100 wins.

What if we change the game so that players cannot re-use integers?

For example, two players might take turns drawing from a common pool of numbers of 1..15 without 
replacement until they reach a total >= 100.

Given an integer maxChoosableInteger and another integer desiredTotal, determine if the first player to move can force a win, assuming both players play optimally.

You can always assume that maxChoosableInteger will not be larger than 20 and desiredTotal will not be larger than 300.

Example
  Input: maxChoosableInteger = 10
  desiredTotal = 11
  Output: false

Explanation:
  No matter which integer the first player choose, the first player will lose.
  The first player can choose an integer from 1 up to 10.
  If the first player choose 1, the second player can only choose integers from 2 up to 10.
  The second player will win by choosing 10 and get a total = 11, which is >= desiredTotal.
  Same with other integers chosen by the first player, the second player will always win.

*/

const canIWin = function(maxChoosableInteger, desiredTotal) {
  let map = new Map();

  if (maxChoosableInteger >= desiredTotal) return true;

  // эта формула дает нам сумму от 1 ... maxChoosableInteger, и если сумма не может превысить требуемый итог, никто не выигрывает
  // кейс 5 и 50
  if (((1 + maxChoosableInteger) / 2) * maxChoosableInteger < desiredTotal) return false;

  return helper([], desiredTotal);

  function helper(used = [], sum) {
    // Cколько осталось в общей сумме, чтобы выиграть.
    // Если его меньше или равно 0, это означает, что предыдущий парень уже выиграл, так что этот парень проигрывает.
    if (sum <= 0) {
      return false;
    }

    let key = used.toString();

    if (map.has(key)) {
      return map.get(key);
    }

    for (let i = 1; i <= maxChoosableInteger; i++) {
      if (used[i]) continue;

      used[i] = true;

      if (!helper(used, sum - i)) {
        map.set(key, true);
        used[i] = false;
        return true;
      }

      used[i] = false;
    }

    map.set(key, false);

    return false;
  }
};
