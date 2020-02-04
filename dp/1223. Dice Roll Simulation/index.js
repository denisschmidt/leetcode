/*

A die simulator generates a random number from 1 to 6 for each roll. 
You introduced a constraint to the generator such that it cannot roll the number i more than rollMax[i] (1-indexed) 
consecutive times. 

Given an array of integers rollMax and an integer n, return the number of distinct sequences that can be obtained with exact n rolls.

Two sequences are considered different if at least one element differs from each other. 
Since the answer may be too large, return it modulo 10^9 + 7.

 Example 1:
  Input: n = 2, rollMax = [1,1,2,2,2,3]
  Output: 34
  Explanation: There will be 2 rolls of die, if there are no constraints on the die, there are 6 * 6 = 36 possible combinations. In this case, looking at rollMax array, the numbers 1 and 2 appear at most once consecutively, therefore sequences (1,1) and (2,2) cannot occur, so the final answer is 36-2 = 34.

Example 2:
  Input: n = 2, rollMax = [1,1,1,1,1,1]
  Output: 30

Example 3:
  Input: n = 3, rollMax = [1,1,1,2,2,3]
  Output: 181
 

Constraints:
  1 <= n <= 5000
  rollMax.length == 6
  1 <= rollMax[i] <= 15

*/

// Time O(N^2)
// Space O(N^2)
const dieSimulator = function(N, rollMax) {
  let dp = Array(N + 1)
    .fill(null)
    .map(() => Array(6).fill(0));

  let mod = 1e9 + 7;

  for (let i = 0; i < 6; i++) {
    dp[1][i] = 1;
  }

  dp[1][6] = 6;

  for (let n = 2; n <= N; n++) {
    let cnt = 0;
    for (let j = 0; j < 6; j++) {
      // Если ограничений нет, итоговые последовательность равна суммарной последовательностью из предыдущего кол-во бросков
      dp[n][j] = dp[n - 1][6];

      // Для xx1 только 111 не допускается, поэтому нам нужно удалить только 1 последовательность из предыдущей суммы
      if (n - rollMax[j] === 1) {
        dp[n][j]--;
      }

      // Для axx1 нам нужно удалить номер a11 (211 + 311 + 411 + 511 + 611) => (..2 + ..3 + ..4 + ..5 + ..6) => ( сумма - ..1)
      if (n - rollMax[j] >= 2) {
        let reduciton = dp[n - rollMax[j] - 1][6] - dp[n - rollMax[j] - 1][j];

        dp[n][j] = (((dp[n][j] - reduciton) % mod) + mod) % mod;
      }

      cnt = (cnt + dp[n][j]) % mod;
    }

    dp[n][6] = cnt;
  }

  return dp[N][6];
};

let a = dieSimulator(3, [1, 1, 1, 2, 2, 3]);
console.log(a);
