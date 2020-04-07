/**
 * @param {string} S
 * @param {number} K
 * @return {number}
 */
var numKLenSubstrNoRepeats = function(S, K) {
  let map = {};

  for (let s of S) {
    map[s] = 0;
  }

  let start = 0;
  let end = 0;
  let cnt = 0;
  let ans = 0;
  let key;

  while (end < n) {
    if (map[S[end]] > 0) {
      cnt++;
    }

    map[S[end++]]++;

    while (cnt > 0) {
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
