/*

Return the lexicographically smallest subsequence of text that contains all the distinct characters of text exactly once.

Example 1:
  Input: "cdadabcc"
  Output: "adbc"

Example 2:
  Input: "abcd"
  Output: "abcd"

Example 3:
  Input: "ecbacba"
  Output: "eacb"

Example 4:
  Input: "leetcode"
  Output: "letcod"
 

Constraints:
  1 <= text.length <= 1000
  text consists of lowercase English letters.
  Note: This question is the same as 316: https://leetcode.com/problems/remove-duplicate-letters/

*/

// Time O(N)
// Space O(2*K + N) K - 26
const smallestSubsequence = text => {
  let stack = [];
  let n = text.length;
  let visited = Array(26).fill(0);
  let lastIndex = Array(26).fill(0);

  for (let i = 0; i < n; i++) {
    lastIndex[getCode(text[i])] = i;
  }

  for (let i = 0; i < n; i++) {
    if (visited[getCode(text[i])] >= 1) continue;

    // Условие для while выполняется когда, текущий символ, меньше, чем тот который в стеке
    // И символ который в стеке еще будет встречаться дальше во входной строке
    // Иначе мы не должны удалять его из стека, так как добавить этот символ будет больше невозможно
    while (stack.length && last(stack) > text[i] && i < lastIndex[getCode(last(stack))]) {
      let x = stack.pop();

      visited[getCode(x)]--;
    }

    stack.push(text[i]);
    visited[getCode(text[i])]++;
  }

  return stack.join('');

  function last(x) {
    return x[x.length - 1];
  }

  function getCode(x) {
    return x.charCodeAt(0) - 97;
  }
};

// DFS TLE
const smallestSubsequence_II = text => {
  let n = text.length;
  let map = {};

  for (let x of text) {
    map[x] = ~~map[x] + 1;
  }

  let res = null;
  for (let i = 0; i < n; i++) {
    dfs(i, text[i]);
  }

  return res;

  function dfs(index, str) {
    if (index > n || str.length > Object.keys(map).length) {
      return;
    }

    if (str.length == Object.keys(map).length) {
      if (res == null || res > str) {
        res = str;
      }
      return;
    }

    for (let i = index; i < n; i++) {
      if (str.indexOf(text[i]) == -1) {
        dfs(i + 1, str + text[i]);
      }
    }
  }
};
