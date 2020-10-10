/*

Given an undirected tree consisting of n vertices numbered from 0 to n-1, which has some apples in their vertices. 

You spend 1 second to walk over one edge of the tree. 

Return the minimum time in seconds you have to spend in order to collect all apples in the tree starting at vertex 0 and coming back to this vertex.

The edges of the undirected tree are given in the array edges, where edges[i] = [fromi, toi] means that exists an edge connecting the vertices fromi and toi. 

Additionally, there is a boolean array hasApple, where hasApple[i] = true means that vertex i has an apple, otherwise, it does not have any apple.

Example 1:
  Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,true,true,false]
  Output: 8 
  Explanation: The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows.  

Example 2:
  Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,false,true,false]
  Output: 6
  Explanation: The figure above represents the given tree where red vertices have an apple. One optimal path to collect all apples is shown by the green arrows.  

Example 3:
  Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,false,false,false,false,false]
  Output: 0
 

Constraints:
  1 <= n <= 10^5
  edges.length == n-1
  edges[i].length == 2
  0 <= fromi, toi <= n-1
  fromi < toi
  hasApple.length == n

*/

// Time O(N)
// Space O(N)
const minTime = (n, edges, hasApple) => {
  let graph = [];
  let visited = Array(n).fill(false);

  for (let i = 0; i < n; i++) graph[i] = [];

  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  return dfs(0, 0);

  /*
      Вы можете думать, myCost как стоимость посещения узла. 
      
      Если мы в конечном итоге посетим этот узел, то нам придется заплатить 2. 
      
      Как вы могли заметить, если в каком-либо узле или каком-либо поддереве нет яблока, мы не добавляем этот «myCost», потому что на самом деле не будем его посещать.
      
      Также следует отметить, что myCost для root равен 0, что передается из основного метода. 
      
      Это потому, что мы начинаем с корня, поэтому независимо от того, есть ли в корне яблоко, нам ничего не придется платить.
      
  */

  // Bottom - Top
  function dfs(u, myCost) {
    if (visited[u]) return 0;

    visited[u] = true;

    let neighbors = graph[u];
    let cnt = 0;

    for (let i = 0; i < neighbors.length; i++) {
      let v = neighbors[i];

      cnt += dfs(v, 2);
    }

    // Поднимаемся равномерно от нижних нод к верхним
    if (cnt == 0 && hasApple[u] == false) {
      return 0;
    }

    return cnt + myCost;
  }
};
