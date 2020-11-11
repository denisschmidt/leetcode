// Time O(N*K)
// Space O(N)
const minDeletions = s => {
  let map1 = {};

  for (let x of s) {
    map1[x] = ~~map1[x] + 1;
  }

  let map2 = {};

  for (let k of Object.keys(map1)) {
    map2[map1[k]] = ~~map2[map1[k]] + 1;
  }

  let cnt = 0;

  for (let k of Object.keys(map2)) {
    if (map2[k] > 1) {
      let freq = map2[k];

      for (let i = 0; i < freq - 1; i++) {
        let x = k;

        while (x >= 0 && x in map2) {
          cnt++;
          x--;
        }

        if (x > 0) {
          map2[x] = 1;
        }
      }
    }
  }

  return cnt;
};
