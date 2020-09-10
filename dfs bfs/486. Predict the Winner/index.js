/*

Given an array of scores that are non-negative integers. 
Player 1 picks one of the numbers from either end of the array followed by the player 2 and then player 1 and so on. 
Each time a player picks a number, that number will not be available for the next player. 
This continues until all the scores have been chosen. 

The player with the maximum score wins.

Given an array of scores, predict whether player 1 is the winner. 
You can assume each player plays to maximize his score.

Example 1:
  Input: [1, 5, 2]
  Output: False
  Explanation: 
    Initially, player 1 can choose between 1 and 2. 
    If he chooses 2 (or 1), then player 2 can choose from 1 (or 2) and 5. If player 2 chooses 5, then player 1 will be left with 1 (or 2). 
    So, final score of player 1 is 1 + 2 = 3, and player 2 is 5. 
    Hence, player 1 will never be the winner and you need to return False.

Example 2:
  Input: [1, 5, 233, 7]
  Output: True
  Explanation: 
    Player 1 first chooses 1. Then player 2 have to choose between 5 and 7. No matter which number player 2 choose, player 1 can choose 233.
    Finally, player 1 has more score (234) than player 2 (12), so you need to return True representing player1 can win.

Note:
  1 <= length of the array <= 20.
  Any scores in the given array are non-negative integers and will not exceed 10,000,000.
  If the scores of both players are equal, then player 1 is still the winner.

*/

/*

  Построим дерево поиска, например, возьмем nums = [3, 2, 4],

  [3,2,4]
   3/\4---------- 1st player's decision
  
  [2,4] [3,2]
  2/ \4 3/ \2----- 2nd player's decision
  
  [4][2] [2][3]
  
  
  Создем два указателя lo и hi на начало и конец массива

  Если 1-й игрок выбирает nums[lo], 2-й может выбирать любой конец nums [lo + 1, hi]             

    1) Если 2-й выбирает nums[lo + 1], 1-й может выбрать любой конец числа [lo + 2, hi]             
    2) Если 2-й выбирает nums[hi], 1-й может выбрать любой конец числа [lo + 1, hi - 1]             
  
    
  Так как 2-й игрок играет, чтобы максимизировать свой счет 
  1-й игрок может получить nums[lo] + min(1.a, 1.b)         
  

  Если 1-й выбирает nums[hi], 2-й игрок может выбрать любой конец чисел nums[lo, hi - 1]

    1) Если 2-й выбирает nums[lo], 1-й может выбирать любой конец nums[lo + 1, hi - 1];             
    2) Если 2-й выбирает nums[hi - 1], 1-й может выбирать любой конец чисел [i, j - 2];             
    
  Так как 2-й игрок играет, чтобы максимизировать свой счет, 1-й игрок может получить nums[hi] + min(2.a, 2.b) 
      
  Так как 1-й игрок играет, чтобы максимизировать свой счет 
    
  1-й игрок может получить максимум при max(nums[lo] + min(1.a, 1.b), nums[hi] + min(2.a, 2.b))

*/

// Time O(N^2)
// Space O(N^2)
const PredictTheWinner = function (nums) {
  let n = nums.length;
  let dp = Array(n)
    .fill(null)
    .map(() => Array(n).fill(null));

  let total = nums.reduce((acc, v) => acc + v, 0);

  // макс сумма первого игрока
  let player1 = helper(0, n - 1);

  return total - player1 <= player1;

  function helper(lo, hi) {
    if (lo > hi) {
      return 0;
    }

    if (lo === hi) {
      return nums[lo];
    }

    if (dp[lo][hi] !== null) {
      return dp[lo][hi];
    }

    dp[lo][hi] = Math.max(
      nums[lo] + Math.min(helper(lo + 1, hi - 1), helper(lo + 2, hi)),
      nums[hi] + Math.min(helper(lo, hi - 2), helper(lo + 1, hi - 1)),
    );

    return dp[lo][hi];
  }
};

// MIN - MAX Algoritm
// Time O(2^N)
// Space O(N)
const PredictTheWinner_II = function (nums) {
  return helper() >= 0;

  function helper(lo, hi) {
    if (lo > hi) {
      return 0;
    }

    if (lo === hi) {
      return nums[lo];
    }

    let a = nums[lo] - helper(lo + 1, hi);
    let b = nums[hi] - helper(lo, hi - 1);

    return Math.max(a, b);
  }
};
