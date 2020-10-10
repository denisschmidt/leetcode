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

  let queue = [S];
  let visited = new Set();

  visited.add(S);

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let s = queue.shift();

      ans.push(s);

      for (let k = 0; k < s.length; k++) {
        if (Number.isFinite(Number(s[k]))) continue;

        let left = s.substring(0, k);
        let right = s.substring(k + 1);

        let s1 = left + s[k].toUpperCase() + right;
        let s2 = left + s[k].toLowerCase() + right;

        if (!visited.has(s1)) {
          visited.add(s1);
          queue.push(s1);
        }

        if (!visited.has(s2)) {
          visited.add(s2);
          queue.push(s2);
        }
      }
    }
  }

  return ans;
};
