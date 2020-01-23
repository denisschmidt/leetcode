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
  let used = Array(n + 1).fill(false);
  let ans = [];

  // проверка того можно ли вообще из стороки сделать палидром
  if (!possibleCreatePalidrome(s)) {
    return [];
  }

  // генерация всех последовательностей
  helper();

  return ans.map(item => item.join(''));

  function helper(comb = []) {
    if (n === comb.length) {
      if (isPalidrome(comb)) {
        ans.push([...comb]);
      }
      return;
    }

    for (let i = 0; i < n; i++) {
      if (used[i]) continue;

      // только уникальные комбинации
      if (i > 0 && str[i - 1] === str[i] && !used[i - 1]) continue;

      comb.push(str[i]);
      used[i] = true;

      helper(comb);

      comb.pop();
      used[i] = false;
    }
  }

  // Time O(N)
  function possibleCreatePalidrome(str) {
    let map = {};

    for (let i = 0; i < str.length; i++) {
      map[str[i]] = ~~map[str[i]] + 1;
    }

    let cnt = 0;
    for (let key of Object.keys(map)) {
      if (map[key] % 2 !== 0) {
        cnt++;
      }
      if (cnt > 1) {
        return false;
      }
    }

    return true;
  }

  // Time O(N)
  function isPalidrome(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
      if (str[i] !== str[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  }
};
