// Time O(N^2)
// Space O(N)
const findAnagrams2 = (s, p) => {
  const ans = [];
  const map = {};
  const set = new Set();

  for (let x of p) {
    map[x] = ~~map[x] + 1;
  }

  for (let i = 0; i < s.length; i++) {
    let cnt = 0;
    const map2 = {};
    const str = s.substring(i, i + p.length);

    if (set.has(str)) {
      ans.push(i);
      continue;
    }

    for (let x of str) {
      map2[x] = ~~map2[x] + 1;
      if (map2[x] === map[x]) {
        cnt++;
      }
    }

    if (cnt === Object.keys(map).length) {
      set.add(str);
      ans.push(i);
    }
  }
  return ans;
};
