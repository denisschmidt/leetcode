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
  const m1 = new Map();
  const m2 = new Map();

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (m1.has(char)) {
      m1.set(char, m1.get(char) + 1);
    } else {
      m1.set(char, 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    let char = t[i];
    if (m2.has(char)) {
      m2.set(char, m2.get(char) + 1);
    } else {
      m2.set(char, 1);
    }
  }

  for (let [key, value] of m1) {
    if (!m2.has(key) || m2.get(key) !== value) {
      return false;
    }
  }
  return true;
};

const res = isAnagram('anagram', 'nagaram');
console.log('===', res);
