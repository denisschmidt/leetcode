/*
You are given an array A of strings.

Two strings S and T are special-equivalent if after any number of moves, S == T.

A move consists of choosing two indices i and j with i % 2 == j % 2, and swapping S[i] with S[j].

Now, a group of special-equivalent strings from A is a non-empty subset S of A
such that any string not in S is not special-equivalent with any string in S.

Return the number of groups of special-equivalent strings from A.


Example 1:

Input: ["a","b","c","a","c","c"]
Output: 3
Explanation: 3 groups ["a","a"], ["b"], ["c","c","c"]
Example 2:

Input: ["aa","bb","ab","ba"]
Output: 4
Explanation: 4 groups ["aa"], ["bb"], ["ab"], ["ba"]
Example 3:

Input: ["abc","acb","bac","bca","cab","cba"]
Output: 3
Explanation: 3 groups ["abc","cba"], ["acb","bca"], ["bac","cab"]
Example 4:

Input: ["abcd","cdab","adcb","cbad"]
Output: 1
Explanation: 1 group ["abcd","cdab","adcb","cbad"]


 */
/**
 * @param {string[]} A
 * @return {number}
 */

const numSpecialEquivGroups = function(arr) {
  const size = arr.length;
  let even = [], odd = [], count = 0, map = {};


  for (let i = 0; i < size; i++) {
    even = [];
    odd = [];
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 === 0) {
        even.push(arr[i][j]);
      } else {
        odd.push(arr[i][j]);
      }
    }
    even.sort();
    odd.sort();
    key = even.join("") + odd.join("");
    if (!map[key]) {
      map[key] = true;
      count++;
    }
  }
  return count;
};

const result = numSpecialEquivGroups(["abc","acb","bac","bca","cab","cba"]);
console.log('---', result);
