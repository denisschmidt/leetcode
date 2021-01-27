/*
  A* Search (https://ru.wikipedia.org/wiki/A*)

  The A* star algorithm is another path-finding algorithm. 

  Подходит для задач с метрикой вида расстояние по Евклидовой метрике.
  
  Порядок обхода вершин определяется эвристической функцией «расстояние + стоимость» (обычно обозначаемой как f(x)). 
  
  Эта функция f(x) — сумма двух других: 
  1) Функции стоимости достижения рассматриваемой вершины (x) из начальной (обычно обозначается как g(x) и может быть как эвристической, так и нет)
  2) Функции эвристической оценки расстояния от рассматриваемой вершины к конечной (обозначается как h(x)).

  A* никогда не упустит возможности минимизировать длину пути, и потому является допустимым.

  For every node at position (x, y), we have some estimated cost node.f = node.g + node.h
  
  node.g - is the actual distance from (startX, startY) to (endX, endY) 
  node.h - is our heuristic (guess) of the distance from (startX, startY) to (endX, endY) => Manhattan distance

  We keep a priority queue to decide what node to search in (expand) next.

  Dijkstra's algorithm is a special case of A* Search with node.h = 0 always.

*/

const aStartSearch = ([startX, startY], [endX, endY]) => {
  let dirs = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];
  let n = forest.length;
  let m = forest[0].length;

  let pq = new PriorityQueue({ comparator: (a, b) => a[0] - b[0] });

  pq.offer([0, 0, startX, startY]);

  let costMap = new Map();

  costMap.set(startX * m + startY, 0);

  while (!pq.isEmpty()) {
    let [_, g, x, y] = pq.poll();

    if (x == endX && y == endY) {
      return g;
    }

    for (let dir of dirs) {
      let newX = x + dir[0];
      let newY = y + dir[1];

      if (newX >= 0 && newX < n && newY >= 0 && newY < m && forest[x][y] > 0) {
        // cost = g + h
        // g - actual distance between two points
        // h - heuristic (guess) of the distance between two points, in our case it will be - Manhattan distance
        let newCost = g + 1 + getDist([x, y], [newX, newY]);

        if (!costMap.has(newX * m + newY) || newCost < costMap.get(newX * m + newY)) {
          costMap.set(newX * m + newY, newCost);
          pq.offer([newCost, g + 1, newX, newY]);
        }
      }
    }
  }

  return -1;
};

function getDist([x, y], [u, z]) {
  return Math.abs(x - u) + Math.abs(y - z);
}
