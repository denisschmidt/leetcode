var minimumSemesters = function(N, relations) {
  let adjList = [];

  for (let i = 1; i <= N; i++) {
    adjList[i] = [];
  }

  for (let index = 0; index < relations.length; index++) {
    let [u, v] = relations[index];

    adjList[u].push(v);
  }

  let visited = [];
  let stack = [];
  let order = [];

  for (let index = 1; index <= N; index++) {
    if (hasCycle(index)) {
      return [];
    }
  }

  let maxPath = 0;

  for (let i = 0; i < order.length; i++) {
    for (let j = 0; j < adjList[order[i]]; j++) {
      const element = array[j];
    }
  }

  console.log(order);

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
    }

    stack[index] = false;
    order.push(index);

    return false;
  }
};

minimumSemesters(3, [
  [1, 3],
  [2, 3],
]);
