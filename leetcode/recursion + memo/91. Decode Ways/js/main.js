// Time O(N)
// Space O(N)
const numDecodings = s => {
  let map = new Map();
  let n = s.length;

  return dfs(s, 0);

  function dfs(str, i) {
    if (i >= n) {
      return 1;
    }

    if (map.has(i)) {
      return map.get(i);
    }

    let res = str[i] == '0' || str[i + 1] == '0' ? 0 : dfs(str, i + 1);

    if (i < n - 1 && str[i] == '1') {
      res += dfs(str, i + 2);
    } else if (i < n - 1 && str[i] == '2' && str[i + 1] <= 6) {
      res += dfs(str, i + 2);
    }

    map.set(i, res);

    return res;
  }
};

// Time: O(N)
// Space: O(N)
const numDecodings_II = s => {
  let map = new Map();

  return dfs(s);

  function dfs(str = '') {
    if (str.length == 0) {
      return 1;
    }

    if (map.has(str)) {
      return map.get(str);
    }

    let ans = 0;

    for (let i = 1; i <= 26; i++) {
      if (str.startsWith(i)) {
        let removeKChars = i >= 10 ? 2 : 1;

        ans += dfs(str.substring(removeKChars));
      }
    }

    map.set(str, ans);

    return ans;
  }
};
