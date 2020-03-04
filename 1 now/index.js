var removeStones = function(stones) {
  if (stones.length === 0) return 0;

  let visited = new Set();
  let islandCnt = 0;

  for (let i = 0; i < stones.length; i++) {
    if (!visited.has(i)) {
      dfs(stones[i][0], stones[i][1], i);
      islandCnt++;
    }
  }

  return stones.length - islandCnt;

  function dfs(i, j, index) {
    visited.add(index);

    for (let k = 0; k < stones.length; k++) {
      if (!visited.has(k) && (i === stones[k][0] || j === stones[k][1])) {
        dfs(stones[k][0], stones[k][1], k);
      }
    }
  }
};
