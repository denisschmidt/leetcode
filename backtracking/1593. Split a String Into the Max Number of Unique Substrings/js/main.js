// backtrack
const maxUniqueSplit = s => {
  let res = 0;

  dfs(0);

  return res;

  function dfs(index, set = new Set()) {
    if (index >= s.length) {
      res = Math.max(res, set.size);
      return;
    }

    for (let i = index + 1; i <= s.length; i++) {
      let tmp = s.substring(index, i);

      if (!set.has(tmp)) {
        set.add(tmp);
        dfs(i, set);
        set.delete(tmp);
      }
    }
  }
};
