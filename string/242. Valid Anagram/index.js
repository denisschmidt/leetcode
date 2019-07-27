/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?

 */

// Complexity analysis
//
// Time complexity : O(n). Time complexity is O(n) because accessing the counter table is a constant time operation.
//
// Space complexity : O(1)
// Although we do use extra space, the space complexity is O(1) because the table's size stays constant no matter how large nn is.
const isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const map = s.split('').reduce(
    (acc, val) => ({
      ...acc,
      [val]: ++acc[val] || 1,
    }),
    {},
  );

  for (let i = 0; i < t.length; i++) {
    let char = t[i];
    map[char]--;

    if (map[char].toString() === 'NaN' || map[char] < 0) {
      return false;
    }
  }
  return true;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const isAnagram2 = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const map = s.split('').reduce(
    (acc, val) => ({
      ...acc,
      [val]: ++acc[val] || 1,
    }),
    {},
  );

  for (let i = 0; i < t.length; i++) {
    if (t[i] in map) {
      if (--map[t[i]] < 0) return false;
    } else {
      return false;
    }
  }

  return true;
};

const res2 = isAnagram2('a', 'b');
console.log('===', res2);
