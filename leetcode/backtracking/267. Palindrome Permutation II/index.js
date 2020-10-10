/*

Given a string s, return all the palindromic permutations (without duplicates) of it. 
Return an empty list if no palindromic permutation could be form.

Example 1:
  Input: "aabb"
  Output: ["abba", "baab"]

Example 2:
  Input: "abc"
  Output: []

*/

// Time O(N!)
// Space O(N)
const generatePalindromes = s => {
  let str = s.split('').sort((a, b) => a.localeCompare(b));
  let n = str.length;
  let ans = [];
  let used = Array(n).fill(false);

  // проверка того можно ли вообще из стороки сделать палидром
  if (!possibleCreatePalidrome(s)) return [];

  // генерация всех последовательностей
  helper([]);

  return ans;

  function helper(comb = []) {
    if (comb.length == n && isPalidrome(comb)) {
      ans.push(comb.join(''));
      return;
    }

    for (let i = 0; i < str.length; i++) {
      if (used[i]) continue;

      // только уникальные комбинации
      if (i > 0 && str[i - 1] == str[i] && !used[i - 1]) continue;

      used[i] = true;
      comb.push(str[i]);

      // recursion
      helper(comb);

      // backtracking
      comb.pop();
      used[i] = false;
    }
  }

  function isPalidrome(str) {
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
      if (str[i] != str[j]) return false;
    }
    return true;
  }

  function possibleCreatePalidrome(str) {
    let map = {};

    for (let x of str) map[x] = ~~map[x] + 1;

    let found = false;
    for (let k of Object.keys(map)) {
      if (map[k] % 2 != 0) {
        if (found) return false;
        found = true;
      }
    }
    return true;
  }
};
