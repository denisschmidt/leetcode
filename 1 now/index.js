/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const calcEquation = function(equations, values, queries) {
  let graph = buildGraph(equations, values);
  let ans = [];

  for (let i = 0; i < queries.length; i++) {
    let [from, to] = queries[i];

    let value = dfs(from, to, 1, new Set());

    if (value !== null) {
      graph.get(from).set(to, value);
      graph.get(to).set(from, 1 / value);
    }

    ans.push(value === null ? -1 : value);
  }

  return ans;

  function dfs(from, to, sum, visited) {
    if (!graph.has(from)) {
      return null;
    }

    if (from === to) {
      return sum;
    }

    visited.add(from);

    for (let [key, value] of graph.get(from)) {
      let current = sum * value;

      if (visited.has(key)) continue;

      if (key === to) return current;

      let v = dfs(key, to, current, visited);

      if (v !== null) {
        return v;
      }
    }

    return null;
  }
};

function buildGraph(equations, values) {
  let graph = new Map();

  for (let i = 0; i < equations.length; i++) {
    let [from, to] = equations[i];
    let value = values[i];

    if (!graph.has(from)) {
      graph.set(from, new Map());
    }

    if (!graph.has(to)) {
      graph.set(to, new Map());
    }

    graph.get(from).set(to, value);
    graph.get(to).set(from, 1 / value);
  }

  return graph;
}
