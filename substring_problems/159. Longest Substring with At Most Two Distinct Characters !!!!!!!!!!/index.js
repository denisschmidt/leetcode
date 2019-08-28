/*
159. Longest Substring with At Most Two Distinct Characters

Given a string s , find the length of the longest substring t  that contains at most 2 distinct characters.

Example 1:
  Input: "eceba"
  Output: 3
  Explanation: t is "ece" which its length is 3.

Example 2:
  Input: "ccaabbb"
  Output: 5
  Explanation: t is "aabbb" which its length is 5.
 */

// Time O(N)
// Space O(K)
var lengthOfLongestSubstringTwoDistinct = function(str) {
  let n = str.length;
  let start = 0;
  let end = 0;
  let count = 0;
  let ans = 0;

  const map = str.split('').reduce(
    (acc, s) => ({
      ...acc,
      [s]: 0,
    }),
    {},
  );

  while (end < n) {
    let s = str[end];

    if (map[s] === 0) {
      count++;
    }

    map[s]++;
    end++;

    while (count > 2) {
      if (map[str[start]] === 1) {
        count--;
      }
      map[str[start]]--;
      start++;
    }

    ans = Math.max(ans, end - start);
  }

  return ans;
};

const res = lengthOfLongestSubstringTwoDistinct('aaaaabc');
console.log('---', res);
