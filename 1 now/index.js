/**
 * @param {number} nodes
 * @param {number[]} parent
 * @param {number[]} value
 * @return {number}
 */
var deleteTreeNodes = function(nodes, parent, value) {
  let graph = [];

  for (let i = 0; i < nodes; i++) {
    graph[i] = [];
  }

  for (let i = 0; i < parent.length; i++) {
    if (parent[i] === -1) continue;
    graph[parent[i]].push(i);
  }

  return dfs(0)[1];

  // Bottom - top рекурсия
  // доходим до самого нижнего узла потом поднимаемся по стеку и считаем сумму уже с учетом всех дочерних нод
  function dfs(index) {
    let sum = value[index];
    let cnt = 1;

    for (let i = 0; i < graph[index].length; i++) {
      let temp = dfs(graph[index][i]);
      sum += temp[0];
      cnt += temp[1];
    }

    if (sum == 0) {
      cnt = 0;
    }

    return [sum, cnt];
  }
};
