/*

Equations are given in the format A / B = k, where A and B are variables represented as
strings, and k is a real number (floating point number). Given some queries, return the answers.
If the answer does not exist, return -1.0.

Example:
  Given a / b = 2.0, b / c = 3.0.
  queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? .
  return [6.0, 0.5, -1.0, 1.0, -1.0 ].

The input is: vector<pair<string, string>> equations, vector<double>& values, vector<pair<string, string>> queries,
where equations.size() == values.size(), and the values are positive. This represents the equations. Return vector<double>.

According to the example above:
  equations = [ ["a", "b"], ["b", "c"] ],
  values = [2.0, 3.0],
  queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]. 
 

The input is always valid. You may assume that evaluating the queries will result in no division by zero and there is no contradiction.

*/

/*
  Алгоритм: 
  
  Хотя это выглядит как математическая задача, мы можем легко смоделировать ее с помощью графа. 

  Имеет ли значение направление ребра? 
  
  -- Да. 

  К примеру a/b)=2.0 мы можем построить ориентированный граф двумя способами
    1) a --    2    --> b
    2) b -- (1 / 2) --> a

  Исходя из проблемы мы можем определить что у нас ориентированный взвешенный граф
    
  Для отношения: a / c = (a / b) * (b / c) = 2.0 * 3.0 
  
  Нужно просто найти путь, используя DFS от узла a до узла c, и в процессе умножать веса пройденных ребер, т.е. 2 * 3 = 6.

*/

// Time O(N)
// Space O(N)
const calcEquation = function (equations, values, queries) {
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
