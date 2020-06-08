/*

Given an array equations of strings that represent relationships between variables, 
each string equations[i] has length 4 and takes one of two different forms: "a==b" or "a!=b".  

Here, a and b are lowercase letters (not necessarily different) that represent one-letter variable names.

Return true if and only if it is possible to assign integers to variable names so as to satisfy all the given equations.

Example 1:
  Input: ["a==b","b!=a"]
  Output: false
  Explanation: 
    If we assign say, a = 1 and b = 1, then the first equation is satisfied, but not the second.  
    There is no way to assign the variables to satisfy both equations.

Example 2:
  Input: ["b==a","a==b"]
  Output: true
  Explanation: We could assign a = 1 and b = 1 to satisfy both equations.

Example 3:
  Input: ["a==b","b==c","a==c"]
  Output: true

Example 4:
  Input: ["a==b","b!=c","c==a"]
  Output: false

Example 5:
  Input: ["c==c","b==d","x!=z"]
  Output: true
 

Note:
  1 <= equations.length <= 500
  equations[i].length == 4
  equations[i][0] and equations[i][3] are lowercase letters
  equations[i][1] is either '=' or '!'
  equations[i][2] is '='

*/

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
const equationsPossible = function(equations) {
  let graph = [];

  for (let i = 0; i < 26; i++) {
    graph[i] = i;
  }

  for (let i = 0; i < equations.length; i++) {
    let u = equations[i][0].charCodeAt(0) - 97;
    let v = equations[i][3].charCodeAt(0) - 97;

    // Если знак равенства обьединяем буквы в одно подмножество
    if (equations[i][1] === '=') {
      let x = find(u);
      let y = find(v);
      graph[y] = x;
    }
  }

  for (let i = 0; i < equations.length; i++) {
    let u = equations[i][0].charCodeAt(0) - 97;
    let v = equations[i][3].charCodeAt(0) - 97;

    //  Если у нас знак неравенства, но при этом подмножества равны, то соотношения нарушены
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

// Time O(N)
// Space O(N)
const equationsPossible_II = function(equations) {
  let colors = Array(26).fill(0);
  let visited = Array(26).fill(0);

  let graph = [];

  for (let i = 0; i < 26; i++) {
    graph[i] = [];
  }

  for (let i = 0; i < equations.length; i++) {
    // Если a==b то добавляем undirected edge между ними
    if (equations[i][1] === '=') {
      let u = equations[i][0].charCodeAt(0) - 97;
      let v = equations[i][3].charCodeAt(0) - 97;

      // создаем undirected(ненаправленный) граф
      graph[u].push(v);
      graph[v].push(u);
    }
  }

  let colorNum = 0;

  for (let i = 0; i < 26; i++) {
    if (!visited[i]) {
      dfs(i, colorNum);
    }

    // После выхода из условия if все связанные вершины были окрашены.
    // Подготовим другой цвет для следующего connnected компонента

    colorNum++;
  }

  for (let i = 0; i < equations.length; i++) {
    if (equations[i][1] === '!') {
      let u = equations[i][0].charCodeAt(0) - 97;
      let v = equations[i][3].charCodeAt(0) - 97;

      // Так как они неравны, их цвет должен быть другим
      if (colors[u] == colors[v]) {
        return false;
      }
    }
  }

  // Нарушения неравенства не происходит
  return true;

  function dfs(index, color) {
    // Посещаем эту вершину и присваиваем тот же номер цвета, что и у ее родителя
    visited[index] = true;
    colors[index] = color;

    // Получаем список смежных элементов и выполняем dfs для каждого элемента с одинаковым номером цвета
    for (let i = 0; i < graph[index].length; i++) {
      let v = graph[index][i];
      if (!visited[v]) {
        dfs(v, color);
      }
    }
  }
};
