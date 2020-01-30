/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let adjList = [];

  for (let i = 0; i < numCourses; i++) {
    adjList[i] = [];
  }

  for (let i = 0; i < prerequisites.length; i++) {
    let [u, v] = prerequisites[i];

    adjList[u].push(v);
  }

  let visited = new Set();
  let stack = [];

  for (let index = 0; index < numCourses; index++) {
    if (hasCycle(index)) {
      return false;
    }
  }

  return true;

  function hasCycle(index) {
    visited.add(index);
    stack[index] = true;

    for (let i = 0; i < adjList[index].length; i++) {
      let edge = adjList[index][i];

      if (stack[edge]) {
        return true;
      }

      if (!visited.has(edge) && hasCycle(edge)) {
        return true;
      }
    }

    stack[index] = false;

    return false;
  }
};

canFinish(2, [
  [1, 0],
  [0, 1],
]);
