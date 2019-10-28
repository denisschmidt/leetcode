/*
There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

Example 1:
  Input: 2, [[1,0]] 
  Output: true
  Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0. So it is possible.
Example 2:

  Input: 2, [[1,0],[0,1]]
  Output: false
  Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.

Note:
  The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
  You may assume that there are no duplicate edges in the input prerequisites.

 */

// Time O(N + E)
// Space O(N)
const canFinish = (numCourses, prerequisites) => {
  const adjList = [];
  const visited = [];
  const stack = [];

  for (let i = 0; i < numCourses; i++) {
    adjList[i] = [];
  }

  // создаем структуру [id курса] -> [массив курсов необходимых для этого курса]
  prerequisites.forEach(([u, v]) => adjList[u].push(v));

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) {
      return false;
    }
  }

  return true;

  function hasCycle(index) {
    visited[index] = true;
    stack[index] = true;

    for (let i = 0; i < adjList[index].length; i++) {
      const v = adjList[index][i];

      if (stack[v]) {
        return true;
      }

      if (!visited[v] && hasCycle(v)) {
        return true;
      }
    }

    // Backtracking
    stack[index] = false;

    return false;
  }
};
