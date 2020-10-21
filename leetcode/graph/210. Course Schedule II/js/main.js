// https://leetcode.com/articles/course-schedule-ii/
// Time O(N)
//
//  По сути, мы выполняем полный поиск в глубину, охватывающий все узлы дерева.
//  Это дерево, а не граф, потому что не все узлы будут соединены вместе.
//  Могут быть и непересекающиеся компоненты.
//
// Space O(N)

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = (numCourses, prerequisites) => {
  let adjList = [];

  for (let i = 0; i < numCourses; i++) {
    adjList[i] = [];
  }

  for (let [u, v] of prerequisites) {
    adjList[u].push(v);
  }

  let ans = [];
  let visited = Array(numCourses).fill(false);
  let stack = Array(numCourses).fill(false);

  for (let i = 0; i < numCourses; i++) {
    // начинаем поиск с каждого нового узла
    if (hasCycle(i)) {
      return [];
    }
  }

  return ans;

  function hasCycle(u) {
    if (visited[u]) {
      return false;
    }

    stack[u] = true;
    visited[u] = true;

    for (let v of adjList[u]) {
      if (stack[v]) {
        return true;
      }

      if (!visited[v] && hasCycle(v)) {
        return true;
      }
    }

    // Когда мы добавляем узел N в стек
    // Все узлы необходимые для N в качестве предварительных условий, уже будут в стеке.
    ans.push(u);

    stack[u] = false;

    return false;
  }
};

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
const findOrder = (numCourses, prerequisites) => {
  let adjList = new Map();
  let indegree = Array(numCourses).fill(0);

  for (let i = 0; i < numCourses; i++) {
    adjList.set(i, []);
  }

  // Создаем представление списка смежности графа
  prerequisites.forEach(([u, v]) => {
    adjList.get(u).push(v);
    indegree[v] += 1;
  });

  let queue = [];

  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  let topologicalOrder = [];

  while (queue.length) {
    let u = queue.shift();

    topologicalOrder.push(u);

    for (let v of adjList.get(u)) {
      indegree[v]--;

      if (indegree[v] === 0) {
        queue.push(v);
      }
    }
  }

  if (topologicalOrder.length == numCourses) {
    return topologicalOrder.reverse();
  }

  return [];
};
