/*

There are N courses, labelled from 1 to N.

We are given relations[i] = [X, Y], representing a prerequisite relationship 
between course X and course Y: course X has to be studied before course Y.

In one semester you can study any number of courses as long as 
you have studied all the prerequisites for the course you are studying.

Return the minimum number of semesters needed to study all courses.  
If there is no way to study all the courses, return -1.


Example 1:
  Input: N = 3, relations = [[1,3],[2,3]]
  Output: 2
  Explanation: In the first semester, courses 1 and 2 are studied. In the second semester, course 3 is studied.

Example 2: 
  Input: N = 3, relations = [[1,2],[2,3],[3,1]]
  Output: -1
  Explanation: No course can be studied because they depend on each other.
 

Note:
  1 <= N <= 5000
  1 <= relations.length <= 5000
  relations[i][0] != relations[i][1]
  There are no repeated relations in the input.

*/
const minimumSemesters = function(N, relations) {
  let adjList = [];

  for (let i = 0; i < N; i++) {
    adjList[i] = [];
  }

  for (let index = 0; index < relations.length; index++) {
    let [u, v] = relations[index];

    adjList[u - 1].push(v - 1);
  }

  let visited = [];
  let stack = [];
  let maxLevel = 0;

  let count = Array(N + 1).fill(1);

  for (let index = 0; index < N; index++) {
    // топологическая сортировка
    if (hasCycle(index)) {
      return -1;
    }
  }

  for (let i = 0; i < count.length; i++) {
    maxLevel = Math.max(maxLevel, count[i]);
  }

  return maxLevel;

  function hasCycle(index) {
    visited[index] = true;
    stack[index] = true;

    for (let i = 0; i < adjList[index].length; i++) {
      let v = adjList[index][i];

      if (stack[v]) {
        return true;
      }

      if (!visited[v] && hasCycle(v)) {
        return true;
      }

      count[index] = Math.max(count[index], 1 + count[v]);
    }

    stack[index] = false;

    return false;
  }
};
