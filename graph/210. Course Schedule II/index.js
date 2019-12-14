/*
There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.

There may be multiple correct orders, you just need to return one of them.
If it is impossible to finish all courses, return an empty array.

Example 1:
  Input: 2, [[1,0]]
  Output: [0,1]
  Explanation: There are a total of 2 courses to take. To take course 1 you should have finished
             course 0. So the correct course order is [0,1] .
Example 2:
  Input: 4, [[1,0],[2,0],[3,1],[3,2]]
  Output: [0,1,2,3] or [0,2,1,3]
  Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both
             courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. 
             So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3] .

Note:
  The input prerequisites is a graph represented by a list of edges, not adjacency matrices.
  Read more about how a graph is represented.
  You may assume that there are no duplicate edges in the input prerequisites.

 */

// https://leetcode.com/articles/course-schedule-ii/
// Time O(N)
//
//  По сути, мы выполняем полный поиск в глубину, охватывающий все узлы дерева.
//  Это дерево, а не граф, потому что не все узлы будут соединены вместе.
//  Могут быть и непересекающиеся компоненты.
//
// Space O(N)
const findOrder = (numCourses, prerequisites) => {
  const adjList = [];

  for (let i = 0; i < numCourses; i++) {
    adjList[i] = [];
  }

  prerequisites.forEach(([u, v]) => adjList[u].push(v));

  const ans = [];
  const visited = [];
  const stack = [];
  for (let i = 0; i < numCourses; i++) {
    // начинаем поиск с каждого нового узла
    if (hasCycle(i)) {
      return [];
    }
  }

  return ans;

  function hasCycle(index) {
    if (visited[index]) {
      return false;
    }
    visited[index] = true;
    stack[index] = true;

    // рекурсивно обходим всех соседей
    // если у узла нет соседей то добавляем этот узел в стек
    for (let j = 0; j < adjList[index].length; j++) {
      const v = adjList[index][j];

      if (stack[v]) {
        return true;
      }

      if (!visited[v] && hasCycle(v)) {
        return true;
      }
    }

    // Когда мы добавляем узел N в стек, все узлы необходимые для N в качестве предварительных условий, уже будут в стеке.
    ans.push(index);

    stack[index] = false;

    return false;
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

Первым узлом в топологическом порядке будет узел, у которого нет входящих ребер.
По сути, любой узел, имеющий степень 0, может начать топологически отсортированный порядок.
Если таких узлов несколько, их относительный порядок не имеет значения, и они могут появляться в любом порядке.

Добавляем в очередь узлы которые не требуют обязательных курсов

Если мы удалим все эти курсы из графа вместе с их исходящими ребрами, мы сможем найти курсы / узлы, которые должны быть обработаны далее.
Это снова будут узлы со степенью 0.
Мы можем непрерывно делать это, пока все курсы не будут учтены.

Алгоритм

1) Переберем все ребра во входных данных и создадим список смежности [id курса] -> [массив курсов которые зависят от него]
2) Инициализируем карту степеней для достижения курса.
3) Инициализируем очередь Q, чтобы отслеживать все узлы на графике с 0 степенью.
4) Добавим все узлы с 0 степенью в очередь.
5) Делаем это пока очередь не станет пустой.
6) Берем узел из очереди. Это узел - N. Для всех соседей этого узла, N, уменьшим их степень на 1.
   Если какой-либо уровень узла достигнет 0, добавим его в очередь.
   Добавим узел N в список, сохраняя топологически отсортированный порядок. Продолжаем пока что-то есть в стеке.

 */
// Time O(N)
// Space O(N)
const findOrder2 = (numCourses, prerequisites) => {
  const adjList = new Map();
  const indegree = Array(numCourses).fill(0);

  // Создаем представление списка смежности графа
  prerequisites.forEach(([u, v]) => {
    if (!adjList.has(v)) {
      adjList.set(v, [u]);
    } else {
      const arr = adjList.get(v);
      arr.push(u);
      adjList.set(v, arr);
    }
    indegree[u] += 1;
  });

  const queue = [];

  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  const topologicalOrder = [];

  while (queue.length) {
    let node = queue.shift();
    topologicalOrder.push(node);

    if (adjList.has(node)) {
      const arr = adjList.get(node);

      for (let neighbor of arr) {
        indegree[neighbor]--;

        if (indegree[neighbor] === 0) {
          queue.push(neighbor);
        }
      }
    }
  }

  if (topologicalOrder.length === numCourses) {
    return topologicalOrder;
  }

  return [];
};
