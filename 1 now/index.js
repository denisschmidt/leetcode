function sumOfDistancesInTree(N, edges) {
  let adjList = [];

  for (let i = 0; i < N; i++) {
    adjList[i] = [];
  }

  edges.forEach(([u, v]) => {
    adjList[u].push(v);
    adjList[v].push(u);
  });

  let ans = [];

  for (let i = 0; i < N; i++) {
    let sum = getSum(i);
    ans.push(sum);
  }

  return ans;

  function getSum(index) {
    let sum = 0;
    let queue = [index];
    let depth = [0];
    let visited = new Set();

    visited.add(index);

    while (queue.length) {
      let size = queue.length;

      for (let i = 0; i < size; i++) {
        let u = queue.shift();
        let d = depth.shift();

        sum += d;

        for (let j = 0; j < adjList[u].length; j++) {
          let v = adjList[u][j];

          if (visited.has(v)) continue;

          visited.add(v);
          queue.push(v);
          depth.push(d + 1);
        }
      }
    }

    return sum;
  }
}
