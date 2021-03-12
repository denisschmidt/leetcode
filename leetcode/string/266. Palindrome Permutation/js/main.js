// Time O(N)
// Space O(1)
const canPermutePalindrome = str => {
  let map = {};

  for (let s of str) {
    map[s] = ~~map[s] + 1;
  }

  let cnt = 0;

  for (let key of Object.keys(map)) {
    if (cnt > 1) {
      return false;
    }

    if (map[key] % 2 !== 0) {
      cnt++;
    }
  }

  return cnt <= 1;
};
