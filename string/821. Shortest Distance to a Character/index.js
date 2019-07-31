/*
Given a string S and a character C 

Return an array of integers representing the shortest distance from the character C in the string.

Example 1:

Input: S = "loveleetcode", C = 'e'
Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]


Note:

S string length is in [1, 10000].
C is a single character, and guaranteed to be in string S.
All letters in S and C are lowercase.
 */

let S = 'loveleetcode';
let C = 'e';

// Time O(N)
const shortestToChar = function(str, target) {
  const indexes = [];
  const ans = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === target) {
      indexes.push(i);
    }
  }

  for (let i = 0; i < str.length; i++) {
    let min = Number.MAX_VALUE;
    for (let index of indexes) {
      let diff = i - index;
      min = Math.min(min, Math.abs(diff));
    }
    ans[i] = min;
  }
  return ans;
};

const res = shortestToChar(S, C);
console.log('---', res);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Time O(N)
// Space O(N)
const shortestToChar2 = (str, target) => {
  const ans = [];
  const size = str.length;
  let prev = -size;
  for (let i = 0; i < size; ++i) {
    if (str[i] === target) prev = i;
    ans[i] = i - prev;
  }

  for (let i = size - 1; i >= 0; --i) {
    if (str[i] === target) prev = i;
    ans[i] = Math.min(ans[i], Math.abs(prev - i));
  }
  return ans;
};

const res2 = shortestToChar2(S, C);
console.log('---', res2);
