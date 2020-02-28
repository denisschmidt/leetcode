const balancedString = s => {
  let map = {};
  let n = s.length;
  let res = n;
  let i = 0;
  let k = n / 4;

  for (let j = 0; j < n; ++j) {
    map[s[j]] = ~~map[s[j]] + 1;
  }

  map['Q'] = map['Q'] || k;
  map['W'] = map['W'] || k;
  map['E'] = map['E'] || k;
  map['R'] = map['R'] || k;

  for (let j = 0; j < n; ++j) {
    --map[s[j]];

    while (i < n && map['Q'] <= k && map['W'] <= k && map['E'] <= k && map['R'] <= k) {
      res = Math.min(res, j - i + 1);
      map[s[i]]++;
      i++;
    }
  }

  return res;
};
