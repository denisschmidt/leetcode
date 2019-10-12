/*
Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

Example:

Input: "aab"
Output:
[
  ["aa","b"],
  ["a","a","b"]
]

 */

// Time: O (N ^2 * 2 ^ N)
// Для строки с длиной N будет (n - 1) интервал между символами.
// Для каждого интервала мы можем вырезать или не вырезать его, поэтому будет 2 ^ (n - 1) способов разбить строку.
// Для каждого способа разбиения нам нужно проверить, является ли это палиндромом, то есть O (n).
// Для каждого способа разбиения нам также нужно сделать копию разбиения substring, чтобы вставить в ответ, это O(N)

// Space O(N)
const partition = function(s) {
  const ans = [];

  backtrack();

  return ans;

  function backtrack(comb = [], index = 0) {
    if (index === s.length) {
      ans.push([...comb]);
    } else {
      for (let i = index; i < s.length; i++) {
        if (isPalidrome(s, index, i)) {
          comb.push(s.substring(index, i + 1));
          backtrack(comb, i + 1);
          comb.pop();
        }
      }
    }
  }

  function isPalidrome(str, left, right) {
    while (left < right)
      if (str[left++] !== str[right--]) {
        return false;
      }
    return true;
  }
};
