/*

You are given K eggs, and you have access to a building with N floors from 1 to N. 

Each egg is identical in function, and if an egg breaks, you cannot drop it again.

You know that there exists a floor F with 0 <= F <= N such that any egg dropped at a floor higher than F will break, and any egg dropped at or below floor F will not break.

Each move, you may take an egg (if you have an unbroken one) and drop it from any floor X (with 1 <= X <= N). 

Your goal is to know with certainty what the value of F is.

What is the minimum number of moves that you need to know with certainty what F is, regardless of the initial value of F?

 Example 1:
  Input: K = 1, N = 2
  Output: 2
  Explanation: 
    Drop the egg from floor 1.  If it breaks, we know with certainty that F = 0.
    Otherwise, drop the egg from floor 2.  If it breaks, we know with certainty that F = 1.
    If it didn't break, then we know with certainty F = 2.
    Hence, we needed 2 moves in the worst case to know what F is with certainty.

Example 2:
  Input: K = 2, N = 6
  Output: 3

Example 3:
  Input: K = 3, N = 14
  Output: 4
  

Note:
  1 <= K <= 100
  1 <= N <= 10000

*/

/*

  https://www.youtube.com/watch?v=iOaRjDT0vjc
  http://www.geeksforgeeks.org/dynamic-programming-set-11-egg-dropping-puzzle/

  Определяем состояния проблемы через рекурсию

  Обозначим f(K, S) как максимальное количество этажей, которое разрешимо с учетом K яиц и S шагов.

  
  После того, как я бросаю яйцо:
    1) Если яйцо разбито, я должен продолжать бросать яйца c нижних этажей. 
      Максимальное количество нижних этажей, которое я могу обработать, равно f (K - 1, S - 1).

    2) Если яйцо не разбито, я должен продолжать бросать яйца с верхних этажей. 
      Максимальное количество верхних этажей, которое я могу обработать, равно f (K, S - 1).
   

  Таким образом, максимальное общее количество этажей, которое я могу обработать, 
  равно 1 плюс результат вышеупомянутых двух случаев, то есть f(K, S) = 1 + f(K - 1, S - 1) + f(K, S - 1).

*/

// Base solution
const superEggDrop_III = function (eggs, floors) {
  return helper(eggs, floors);

  function helper(eggs, floors) {
    if (eggs == 1) {
      return floors;
    }

    if (floors == 0) {
      return 0;
    }

    let min = Number.MAX_VALUE;

    for (let i = 1; i <= floors; i++) {
      let val = 1 + Math.max(helper(eggs - 1, i - 1), helper(eggs, floors - i));

      if (val < min) {
        min = val;
      }
    }

    return min;
  }
};

// Better solution
// Dp
const superEggDrop_II = (eggs, floors) => {
  let dp = Array(eggs + 1)
    .fill(0)
    .map(() => Array(floors + 1).fill(0));

  for (let f = 0; f <= floors; f++) {
    dp[1][f] = f;
  }

  let c = 0;

  for (let e = 2; e <= eggs; e++) {
    for (let f = 1; f <= floors; f++) {
      dp[e][f] = Number.MAX_VALUE;

      for (let k = 1; k <= f; k++) {
        c = 1 + Math.max(dp[e - 1][k - 1], dp[e][f - k]);

        if (c < dp[e][f]) {
          dp[e][f] = c;
        }
      }
    }
  }

  return dp[eggs][floors];
};

// dp[i] - максимальное количество этажей, которое разрешимо с учетом K яиц и S шагов.

// Time O(S*K) где S - результат
// Space O(K)
const superEggDrop = (eggs, floors) => {
  let dp = Array(eggs + 1).fill(0);
  let step = 0;

  while (dp[eggs] < floors) {
    for (let e = eggs; e > 0; e--) {
      dp[e] = 1 + (dp[e] + dp[e - 1]);
    }
    step++;
  }
  return step;
};
