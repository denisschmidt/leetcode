/*

An undirected, connected graph of N nodes (labeled 0, 1, 2, ..., N-1) is given as graph.

graph.length = N, and j != i is in the list graph[i] exactly once, if and only if nodes i and j are connected.

Return the length of the shortest path that visits every node. 

You may start and stop at any node, you may revisit nodes multiple times, and you may reuse edges.

Example 1:
  Input: [[1,2,3],[0],[0],[0]]
  Output: 4
  Explanation: One possible path is [1,0,2,0,3]

Example 2:
  Input: [[1],[0,2,4],[1,3,4],[2],[1,2]]
  Output: 4
  Explanation: One possible path is [0,1,4,2,3]
 

Note:
  1 <= graph.length <= 12
  0 <= graph[i].length < graph.length

*/

/*

  Алгоритм:

  1) Инициализируем queue, чтобы содержать N возможных путей, каждый из которых начинается с [0, N-1]. 
     Это потому, что мы можем начать с любого из N возможных узлов.

  2) На каждом шаге мы удаляем элемент из очереди и проверяем, покрыли ли мы все 12 узлов в нашей битовой маске. 
    Если мы обошли все узлы, мы немедленно возвращаем длину пути. 
  
  BFS гарантирует путь с наименьшими затратами !!!

  3) В противном случае, мы получаем всех соседей текущего узла 
    Для каждого соседа устанавливаем Node на посещения в bitMask, а затем добавляем его обратно в очередь.

  Эта реализация позволяет избежать зацикливания в бесконечных циклах, проверяя, что она не повторяет уже пройденный путь.
   
*/

// Time O(N)
// Space O(N)
const shortestPathLength = graph => {
  let n = graph.length;
  let queue = [];
  let visited = new Set();
  let cnt = 0;
  let fullMask = (1 << n) - 1;

  for (let i = 0; i < n; i++) {
    let node = new Node(i, 1 << i);
    queue.push(node);
    visited.add(node.createKey());
  }

  while (queue.length) {
    let size = queue.length;

    for (let k = 0; k < size; k++) {
      let node = queue.shift();

      if (node.mask == fullMask) {
        return cnt;
      }

      for (let next of graph[node.id]) {
        let nextNode = new Node(next, node.mask | (1 << next));

        if (visited.has(nextNode.createKey())) continue;

        visited.add(nextNode.createKey());
        queue.push(nextNode);
      }
    }

    cnt++;
  }

  return cnt;
};

class Node {
  constructor(id, mask) {
    this.id = id;
    this.mask = mask;
  }

  createKey() {
    return this.id + ' ' + this.mask;
  }
}
