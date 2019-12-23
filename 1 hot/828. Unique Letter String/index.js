/*

A character is unique in string S if it occurs exactly once in it.

For example, in string S = "LETTER", the only unique characters are "L" and "R".

Let's define UNIQ(S) as the number of unique characters in string S.

For example, UNIQ("LETTER") =  2.

Given a string S with only uppercases, calculate the sum of UNIQ(substring) over all non-empty substrings of S.

If there are two or more equal substrings at different positions in S, we consider them different.

Since the answer can be very large, return the answer modulo 10 ^ 9 + 7.

Example 1:
  Input: "ABC"
  Output: 10
  Explanation: All possible substrings are: "A","B","C","AB","BC" and "ABC".
  Evey substring is composed with only unique letters.
  Sum of lengths of all substring is 1 + 1 + 1 + 2 + 2 + 3 = 10
 
Example 2:
  Input: "ABA"
  Output: 8
  Explanation: The same as example 1, except uni("ABA") = 1.
  A, B, A, AB, BA, ABA 
  1  1  1  2   2    1 = 8

Note: 0 <= S.length <= 10000.

2 * 2 => 4
2 * 1

[0, 0, 1] 
[2, 3, 3]

1 * 2
2 * 2 
2 * 1


[-1, -1, 0]
[2, -1, -1]

AB -> A B AB
ABF => A B F AB BF ABF

 */

// Time O(N + K)
// Space O(N)
const uniqueLetterString = str => {
  let mod = 1e9 + 7;
  let size = str.length;
  let left = Array(size).fill(-1);
  let right = Array(size).fill(-1);
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    let s = str[i];
    if (map.has(s)) {
      left[i] = map.get(s) + 1;
      right[map.get(s)] = i;
    }
    map.set(s, i);
  }

  let result = 0;

  for (let i = 0; i < size; i++) {
    let l = left[i] === -1 ? 0 : left[i];
    let r = right[i] === -1 ? size : right[i];
    result = (result + (i + 1 - l) * (r - i)) % mod;
  }

  return result;
};

const res = uniqueLetterString('ABA');

console.log(res);

// Time O(N * K)
// Space O(1)
const uniqueLetterString_II = str => {
  let mod = 1e9 + 7;
  let size = str.length;
  let result = 0;
  for (let i = 0, l = 0, r = 0; i < size; i++) {
    for (l = i - 1; l >= 0 && str[i] !== str[l]; l--) {}
    for (r = i + 1; r < size && str[i] !== str[r]; r++) {}
    result = (result + (i - l) * (r - i)) % mod;
  }

  return result;
};
