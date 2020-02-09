/*
  Используем DSU или Union-Find

  У нас есть 26 узлов в графе. 
  
  Все уравнения "==" на самом деле представляют связь на графe. 
  
  Во-первый пройдемся по уравнениям равенства и используем операцию объединения, чтобы объединить переменные в один набор.

  Во-вторых, пройдитесь по уравнениям неравенства и убедитесь, что переменные не находятся в одном наборе, используя операцию поиска.

  Два неравных узла должны быть разного множества.

*/

// Time O(N)
// Space O(N)
var equationsPossible = function(equations) {
  let graph = [];

  for (let i = 0; i < 26; i++) {
    graph[i] = i;
  }

  for (let i = 0; i < equations.length; i++) {
    let u = equations[i][0].charCodeAt(0) - 97;
    let v = equations[i][3].charCodeAt(0) - 97;

    if (equations[i][1] === '=') {
      let x = find(u);
      let y = find(v);
      graph[y] = x;
    }
  }

  for (let i = 0; i < equations.length; i++) {
    let u = equations[i][0].charCodeAt(0) - 97;
    let v = equations[i][3].charCodeAt(0) - 97;

    if (equations[i][1] === '!') {
      let x = find(u);
      let y = find(v);

      if (x === y) {
        return false;
      }
    }
  }

  return true;

  function find(x) {
    if (graph[x] !== x) {
      graph[x] = find(graph[x]);
    }

    return graph[x];
  }
};

// ["a==b","b!=a"]
