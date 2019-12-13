/*

There are n servers numbered from 0 to n-1 connected by undirected server-to-server connections 
forming a network where connections[i] = [a, b] represents a connection between servers a and b.

Any server can reach any other server directly or indirectly through the network.

A critical connection is a connection that, if removed, will make some server unable to reach some other server.

Return all critical connections in the network in any order.

Example 1
  Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
  Output: [[1,3]]
  Explanation: [[3,1]] is also accepted.

         0
       /  \
      /    \
     2------1
            |
            |
            3
Constraints:
  1 <= n <= 10^5
  n-1 <= connections.length <= 10^5
  connections[i][0] != connections[i][1]
  There are no repeated connections.

6
[[0,1],[1,2],[2,0],[1,3],[3,4],[4,5],[5,3]]

              0
               \
                1
              /  \
             3    2
            /
          4
         /
        5

[[1,3]]


5
[[1,0],[2,0],[3,2],[4,2],[4,3],[3,0],[4,0]]

              1
               \
                0----4
              /  \  /
             3----2/
            /
          2
         /
        4



P@ssw0rd2NX

7bsz36k7@TS4xkwj5

=zy$J&{6:(}9V{XL


8 800 100 12 99 (222)

*/

const criticalConnections = (numConnections, connections) => {
  let adjList = [];
  let counter = Array(numConnections).fill(0);

  for (let i = 0; i < numConnections; i++) {
    adjList[i] = [];
  }

  connections.forEach(([u, v]) => {
    adjList[u].push(v);
    adjList[v].push(u);
  });

  let visited = [];
  let stack = [];
  let path = [];
  let paths = [];
  let ans = [];

  for (let i = 0; i < numConnections; i++) {
    if (hasCycle(i)) {
      paths.push([...path]);
      path = [];
    }
  }

  console.log(paths);

  adjList.forEach((neighbors, index) => {
    for (const neighbor of neighbors) {
      let found = true;
      paths.forEach(cycle => {
        if (cycle.includes(index) && cycle.includes(neighbor)) {
          found = false;
        }
      });
      if (found) {
        ans.push([index, neighbor]);
      }
    }
  });

  return ans;

  function hasCycle(u) {
    path.push(u);

    if (visited[u]) {
      return false;
    }

    visited[u] = true;
    stack[u] = true;

    const neighbors = adjList[u];
    for (let i = 0; i < neighbors.length; i++) {
      const v = neighbors[i];

      if (stack[v]) {
        return true;
      }

      if (!visited[v] && hasCycle(v)) {
        return true;
      }
    }

    stack[u] = false;

    return false;
  }
};

const res = criticalConnections(5, [
  [1, 0],
  [2, 0],
  [3, 2],
  [4, 2],
  [4, 3],
  [3, 0],
  [4, 0],
]);

console.log(res);
