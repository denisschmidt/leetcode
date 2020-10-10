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

// Time O(N)
// Space O(N)
const firstUniqChar = s => {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    let x = s[i];
    if (!map.has(x)) {
      map.set(x, i);
    } else {
      map.set(x, -1);
    }
  }

  for (let val of map.values()) {
    if (val != -1) {
      return val;
    }
  }

  return -1;
};
