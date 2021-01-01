// Time O(N)
// Space O(N)
const checkInclusion = (s1, s2) => {
  let map = {};

  for (let x of s1) map[x] = ~~map[x] + 1;

  let start = 0;
  let end = 0;
  let cnt = Object.keys(map).length;

  while (end < s2.length) {
    map[s2[end]]--;

    if (map[s2[end]] == 0) {
      cnt--;
    }

    end++;

    while (cnt == 0) {
      if (end - start == s1.length) {
        return true;
      }

      map[s2[start]]++;

      if (map[s2[start]] > 0) {
        cnt++;
      }

      start++;
    }
  }

  return false;
};
