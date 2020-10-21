// Time O(N + E)
// Space O(N)
const canFinish = (numCourses, prerequisites) => {
  let adjList = [];

  for (let i = 0; i < numCourses; i++) {
    adjList[i] = [];
  }

  // создаем структуру [id курса] -> [массив курсов необходимых для этого курса]
  prerequisites.forEach(([u, v]) => adjList[u].push(v));

  let visited = [];
  let stack = [];

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) {
      return false;
    }
  }

  return true;

  function hasCycle(u) {
    if (visited[u]) {
      return false;
    }
    visited[u] = true;
    stack[u] = true;

    for (let v of adjList[u]) {
      if (stack[v]) {
        return true;
      }

      if (!visited[v] && hasCycle(v)) {
        return true;
      }
    }

    // Backtracking
    stack[u] = false;

    return false;
  }
};
