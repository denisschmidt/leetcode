// For most substring problem, we are given a string and need to find a substring of it which satisfy some restrictions.
// A general way is to use a hashmap assisted with two pointers.

// Time O(N)
// Space O(N)
const minWindow = (s, t) => {
  let map = {};

  for (let x of t) {
    map[x] = ~~map[x] + 1;
  }

  let start = 0;
  let end = 0;
  let INF = Number.MAX_VALUE;
  let k = Object.keys(map).length;
  let minLen = INF;
  let minIndex = INF;

  while (end < s.length) {
    if (map[s[end]] == 1) {
      k--;
    }

    map[s[end++]]--;

    while (k == 0) {
      // update minLength here if finding minimum
      if (minLen > end - start) {
        minLen = end - start;
        minIndex = start;
      }

      if (map[s[start]] == 0) {
        k++;
      }

      map[s[start++]]++;
    }
    // update maxLength here if finding maximum
  }

  return minLen == INF ? '' : s.substring(minIndex, minLen + minIndex);
};
