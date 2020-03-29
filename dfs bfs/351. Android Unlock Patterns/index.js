/*

Given an Android 3x3 key lock screen and two integers m and n, where 1 ≤ m ≤ n ≤ 9, 
count the total number of unlock patterns of the Android lock screen, 
which consist of minimum of m keys and maximum n keys.

Rules for a valid pattern:
  Each pattern must connect at least m keys and at most n keys.
  All the keys must be distinct.
  If the line connecting two consecutive keys in the pattern passes through any other keys, the other keys must have previously selected in the pattern. 
  No jumps through non selected key is allowed.
  The order of keys used matters.
 

Explanation:

  | 1 | 2 | 3 |
  | 4 | 5 | 6 |
  | 7 | 8 | 9 |

  Invalid move: 4 - 1 - 3 - 6
  Line 1 - 3 passes through key 2 which had not been selected in the pattern.

  Invalid move: 4 - 1 - 9 - 2
  Line 1 - 9 passes through key 5 which had not been selected in the pattern.

  Valid move: 2 - 4 - 1 - 3 - 6
  Line 1 - 3 is valid because it passes through key 2, which had been selected in the pattern

  Valid move: 6 - 5 - 4 - 1 - 9 - 2
  Line 1 - 9 is valid because it passes through key 5, which had been selected in the pattern.

Example:
  Input: m = 1, n = 1
  Output: 9

*/

// Time O(N!)
// Space O(N)
const numberOfPatterns = (m, n) => {
  let jumps = Array(10)
    .fill(0)
    .map(() => Array(10).fill(0));

  // Какие цифры должны быть достигнуты чтобы перейти от одного шага к другому
  // Прожок от [1, 3] => [3, 1] для этого прыжка нужно чтобы двойка была уже достигнута
  jumps[1][3] = jumps[3][1] = 2;
  jumps[4][6] = jumps[6][4] = 5;
  jumps[7][9] = jumps[9][7] = 8;
  jumps[1][7] = jumps[7][1] = 4;
  jumps[2][8] = jumps[8][2] = 5;
  jumps[3][9] = jumps[9][3] = 6;
  jumps[1][9] = jumps[9][1] = jumps[3][7] = jumps[7][3] = 5;

  let ans = 0;
  let visited = Array(10).fill(false);

  helper();

  return ans;

  function helper(path = '') {
    if (path.length >= m) {
      ans++;
    }

    if (path.length >= n) {
      return;
    }

    for (let i = 1; i < 10; i++) {
      if (visited[i]) continue;

      // необходимый номер для прыжка от состояния start -> end
      let jumping = jumps[i][path[path.length - 1]];

      if (jumping && !visited[jumping]) continue;

      visited[i] = true;

      helper(path + i);

      visited[i] = false;
    }
  }
};
