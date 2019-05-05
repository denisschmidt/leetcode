/*
Given a string, find the first non-repeating character in it and return it's index.
If it doesn't exist, return -1.

Examples:
  s = "leetcode"
  return 0.

  s = "loveleetcode",
  return 2.

Note: You may assume the string contain only lowercase letters.
 */

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], map.get(s[i]) + 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
};

const res = firstUniqChar('loveleetcode');
console.log('----', res);
