/*

Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  

Return a list of all possible strings we could create.

Examples:
  Input: S = "a1b2"
  Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

  Input: S = "3z4"
  Output: ["3z4", "3Z4"]

  Input: S = "12345"
  Output: ["12345"]

Note:
  S will be a string with length between 1 and 12.
  S will consist only of letters or digits.

*/

// BFS
// Time O(N * N * 2^N) - где N - длина S
// Space O(2^N)
const letterCasePermutation = S => {
  let ans = [];

  let queue = [S.split('')];
  let visited = new Set();

  visited.add(S);

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let chars = queue.shift();

      ans.push(chars.join(''));

      for (let k = 0; k < chars.length; k++) {
        for (let z = 0; z < 2; z++) {
          let copy = [...chars];

          if (z == 0) {
            copy[k] = copy[k].toUpperCase();
          } else {
            copy[k] = copy[k].toLowerCase();
          }

          let c = copy.join('');

          if (visited.has(c)) continue;

          visited.add(c);
          queue.push(copy);
        }
      }
    }
  }

  return ans;
};
