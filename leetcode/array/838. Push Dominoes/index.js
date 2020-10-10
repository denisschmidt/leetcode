/*

There are N dominoes in a line, and we place each domino vertically upright.

In the beginning, we simultaneously push some of the dominoes either to the left or to the right.

After each second, each domino that is falling to the left pushes the adjacent domino on the left.

Similarly, the dominoes falling to the right push their adjacent dominoes standing on the right.

When a vertical domino has dominoes falling on it from both sides, it stays still due to the balance of the forces.

For the purposes of this question, we will consider that a falling domino expends no additional force to a falling or already fallen domino.

Given a string "S" representing the initial state. S[i] = 'L', if the i-th domino has been pushed to the left; S[i] = 'R', if the i-th domino has been pushed to the right; S[i] = '.', if the i-th domino has not been pushed.

Return a string representing the final state. 

Example 1:
  Input: ".L.R...LR..L.."
  Output: "LL.RR.LLRRLL.."

Example 2:
  Input: "RR.L"
  Output: "RR.L"
  Explanation: The first domino expends no additional force on the second domino.

Note:
  0 <= N <= 10^5
  String dominoes contains only 'L', 'R' and '.'

*/

// Time O(N)
// Space O(N)
const pushDominoes = dominoes => {
  let res = '';
  let n = dominoes.length;

  let rightIndex = null;
  let cnt = 0;
  let i = 0;

  while (i < n) {
    if (dominoes[i] == 'L') {
      if (rightIndex == null) {
        for (let h = 0; h < cnt; h++) res += 'L';
      } else {
        if (cnt > 1) {
          let mid = Math.floor(cnt / 2);
          if (cnt % 2 == 0) {
            for (let h = 0; h < mid; h++) res += 'R';
            for (let h = 0; h < mid; h++) res += 'L';
          } else {
            for (let h = 0; h < mid; h++) res += 'R';
            res += '.';
            for (let h = 0; h < mid; h++) res += 'L';
          }
        }

        if (cnt == 1) {
          res += '.';
        }
      }

      res += 'L';

      cnt = 0;
      rightIndex = null;
    } else if (dominoes[i] == 'R') {
      if (cnt > 0) {
        if (rightIndex == null) {
          for (let h = 0; h < cnt; h++) res += '.';
        } else {
          for (let h = 0; h < cnt; h++) res += 'R';
        }
      }

      res += 'R';
      rightIndex = i;
      cnt = 0;
    } else {
      cnt++;
    }
    i++;
  }

  if (cnt > 0) {
    if (rightIndex != null) {
      for (let h = 0; h < cnt; h++) res += 'R';
    } else {
      for (let h = 0; h < cnt; h++) res += '.';
    }
  }

  return res;
};
