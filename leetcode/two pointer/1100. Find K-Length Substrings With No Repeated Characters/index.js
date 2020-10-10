/*

Given a string S, return the number of substrings of length K with no repeated characters.

Example 1:
  Input: S = "havefunonleetcode", K = 5
  Output: 6
  Explanation: There are 6 substrings they are : 'havef','avefu','vefun','efuno','etcod','tcode'.

Example 2:
  Input: S = "home", K = 5
  Output: 0
  Explanation: Notice K can be larger than the length of S. In this case is not possible to find any substring.
 

Note:
  1 <= S.length <= 10^4
  All characters of S are lowercase English letters.
  1 <= K <= 10^4

*/

// Two Pointers
// Time O(N)
// Space O(N)
const numKLenSubstrNoRepeats = (S, K) => {
  let map = {};

  for (let s of S) {
    map[s] = 0;
  }

  let start = 0;
  let end = 0;
  let cnt = 0;
  let ans = 0;

  while (end < S.length) {
    if (map[S[end]] > 0) {
      cnt++;
    }

    map[S[end++]]++;

    while (cnt > 0 || end - start > K) {
      if (map[S[start]] == 2) {
        cnt--;
      }

      map[S[start]]--;

      start++;
    }

    if (end - start == K) {
      ans++;
    }
  }

  return ans;
};
