// Backtracking
const generateParenthesis = n => {
  let ans = [];

  dfs();

  return ans;

  // когда рекурсивный вызов выходит из условии open < max
  // следующий вызов backtrack() в условии close < open выполняется без «(»
  function dfs(str = '', open = 0, close = 0, max = n) {
    if (max * 2 === str.length) {
      ans.push(str);
      return;
    }

    if (open < max) {
      dfs(str + '(', open + 1, close, max);
    }

    if (close < open) {
      dfs(str + ')', open, close + 1, max);
    }
  }
};
