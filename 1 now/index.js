/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let map = {};

  for (let i = 0; i < p.length; i++) {
    map[p[i]] = ~~map[p[i]] + 1;
  }

  let start = 0;
  let end = 0;
  let cnt = Object.keys(map).length;
  let ans = [];

  while (end < s.length) {
    if (map[s[end]] == 0) {
      cnt--;
    }
    map[s[end]]--;
    end++;

    while (cnt == 0) {
      if (map[s[start]] == 0 && end - start == p.length) {
        ans.push(start);
      }
      map[s[start]]++;
      start++;
    }
  }
  return ans;
};
