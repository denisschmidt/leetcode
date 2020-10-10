/*
Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True

Example 2:
Input: "abca"
Output: True

Explanation: You could delete the character 'c'.

Time Complexity: O(N)O(N) where NN is the length of the string.
Each of two checks of whether some substring is a palindrome is


 */

// Time O(N)
// Space O(N)
const validPalindrome = str => {
  let n = str.length;

  let lo = 0;
  let hi = n - 1;

  function dfs(l, r, error) {
    if (l >= r) {
      return true;
    }

    if (error > 1) {
      return false;
    }

    if (str[l] == str[r]) {
      return dfs(l + 1, r - 1, error);
    }

    return dfs(l + 1, r, error + 1) || dfs(l, r - 1, error + 1);
  }
};
