/*
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
 */

/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
  const arr = s.split('');
  const map = new Map();
  let ans = 0;
  let hasOneChar = false;
  let countOdd = 0;

  arr.forEach(i => {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  });

  map.forEach(v => {
    if (v % 2 === 0) {
      ans += v;
    } else if (v % 2 !== 0 && v > 1) {
      if (countOdd === 0) {
        ans += v;
      } else {
        ans += v - 1;
      }
      countOdd++;
    }
    if (v === 1) {
      hasOneChar = true;
    }
  });

  console.log('---', map);

  return hasOneChar && ans % 2 === 0 ? ans + 1 : ans;
};

const res = longestPalindrome('abccccdd'); // ffaaaff
console.log('---', res);
