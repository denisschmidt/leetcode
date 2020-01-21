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

const generatePalindromes = s => {
  let ans = [];
  let str = s.split('').sort((a, b) => a.localeCompare(b));
  let n = str.length;
  let used = Array(n + 1).fill(false);

  helper();

  return ans;

  function helper(comb = []) {
    if (n === comb.length) {
      if (isValid(comb)) {
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

  function isValid(str) {
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

let r = generatePalindromes('civic');
console.log(r);
