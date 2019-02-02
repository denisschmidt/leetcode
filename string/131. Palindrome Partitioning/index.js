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

// Approach to Backtracking !!!!!

/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = function(s) {
  let ans = [];

  const isPalidrome = (str, left, right) => {
    while (left < right) if (str[left++] !== str[right--]) return false;
    return true;
  };

  const combination = (ans, comb, index) => {
    if (index === s.length) {
      ans.push([...comb]);
    } else {
      for (let i = index; i < s.length; i++) {
        if (isPalidrome(s, index, i)) {
          comb.push(s.substring(index, i + 1));
          combination(ans, comb, i + 1);
          comb.pop();
        }
      }
    }
  };

  combination(ans, [], 0);
  return ans;
};

const res = partition('aab');
console.log('---', res);
