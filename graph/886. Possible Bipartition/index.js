/*

Given a set of N people (numbered 1, 2, ..., N), we would like to split everyone into two groups of any size.

Each person may dislike some other people, and they should not go into the same group. 

Formally, if dislikes[i] = [a, b], it means it is not allowed to put the people numbered a and b into the same group.

Return true if and only if it is possible to split everyone into two groups in this way.

Example 1:
  Input: N = 4, dislikes = [[1,2],[1,3],[2,4]]
  Output: true
  Explanation: group1 [1,4], group2 [2,3]

Example 2:
  Input: N = 3, dislikes = [[1,2],[1,3],[2,3]]
  Output: false

Example 3:
  Input: N = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
  Output: false
 

Note:
  1 <= N <= 2000
  0 <= dislikes.length <= 10000
  1 <= dislikes[i][j] <= N
  dislikes[i][0] < dislikes[i][1]
  There does not exist i != j for which dislikes[i] == dislikes[j].

*/

// Time O(N)
// Space O(N)
const possibleBipartition = (N, dislikes) => {
  let adjList = new Map();

  for (let i = 1; i <= N; i++) {
    adjList.set(i, []);
  }

  dislikes.forEach(([u, v]) => {
    adjList.get(u).push(v);
    adjList.get(v).push(u);
  });

  let queue = [];
  let colors = Array(N + 1).fill(0);

  for (let i = 1; i <= N; i++) {
    if (colors[i] != 0) continue;

    queue.push(i);
    colors[i] = 1;

    while (queue.length) {
      let u = queue.shift();

      for (let v of adjList.get(u)) {
        if (colors[v] == 0) {
          colors[v] = -colors[u];
          queue.push(v);
        } else if (colors[v] == colors[u]) {
          return false;
        }
      }
    }
  }

  return true;
};
