/*

On a 2D plane, we place stones at some integer coordinate points.  

Each coordinate point may have at most one stone.

Now, a move consists of removing a stone that shares a column or row with another stone on the grid.

What is the largest possible number of moves we can make?

 Example 1:
  Input: stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]
  Output: 5

Example 2:
  Input: stones = [[0,0],[0,2],[1,1],[2,0],[2,2]]
  Output: 3

Example 3:
  Input: stones = [[0,0]]
  Output: 0
 

Note:
  1 <= stones.length <= 1000
  0 <= stones[i][j] < 10000

*/

/*
  Мы называем связный граф островом. 
  На одном острове должен быть хотя бы один камень. 
  Максимальное количество камней которое может быть удалено = общее количество камней - количество островов

*/

// Time (N^2)
// Space O(N)
const removeStones = function(stones) {
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
