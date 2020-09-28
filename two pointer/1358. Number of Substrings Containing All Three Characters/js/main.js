// Time O(N)
// Space O(1)
const numberOfSubstrings = s => {
  let n = s.length;

  let start = 0;
  let end = 0;
  let k = 3;
  let map = { a: 1, b: 1, c: 1 };
  let res = 0;

  while (end < n) {
    if (map[s[end]] == 1) {
      k--;
    }

    map[s[end++]]--;

    while (k == 0) {
      if (map[s[start]] == 0) {
        k++;
      }

      res += n - end + 1;

      map[s[start++]]++;
    }
  }

  return res;
};
