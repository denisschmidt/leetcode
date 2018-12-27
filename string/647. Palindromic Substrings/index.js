/*
Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even
 they consist of same characters.

Example 1:
  Input: "abc"
  Output: 3
  Explanation: Three palindromic strings: "a", "b", "c".

Example 2:
  Input: "aaa"
  Output: 6
  Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalidrome = s => {
  let left = 0, right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const countSubstrings = s => {
  let count = 0, str = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j <= s.length; j++) {
      str = str + s[j];
      if (isPalidrome(str)) {
        count++;
      }
    }
    str = '';
  }
  return count;
};

const res1 = countSubstrings('aaa');


/*
State
  state[i][j] is true if substring s[i, j] is palindromic

Aim State
  decide all possible state[i][j] and count the element that is true

State Transition
  state[i][j] is true if s[i] == s[j] and state[i+1][j-1] is true (j - i >= 2)
  state[i][j] is true if s[i] == s[j] (j - i == 1)
  state[i][j] is true (j - i == 0)

 */
const countSubstringsDP = str => {
  const size = str.length;
  let res = 0;
  const dp = [[]];

  for (let i = 0; i < size; i++) {
    if (!dp[i]) dp[i] = [];
  }

  for (let i = size - 1; i >= 0 ; i--) {
    for (let j = i; j < size; j++) {
      dp[i][j] = str[i] === str[j] && (j - i < 3 || dp[i + 1][j - 1]);
      if (dp[i][j]) {
        res++;
      }
    }
  }
  return res;
};

const res2 =  countSubstringsDP('aaa');

console.log('--', res2);
