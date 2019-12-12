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

  console.log(adjList);

  /*
  connections.forEach(([u, v]) => {
    if (!adjList.has(u)) {
      adjList.set(u, [v]);
    } else {
      adjList.set(u, [...adjList.get(u), v]);
    }
    counter[u] = +1;
  });
  */
};

const res = criticalConnections(6, [
  [0, 1],
  [1, 2],
  [2, 0],
  [1, 3],
  [3, 4],
  [4, 5],
  [5, 3],
]);

console.log(res);
