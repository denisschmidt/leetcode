// Time O(N * 4^N)
// Space O(N)
const addOperators = (num, target) => {
  let n = num.length;
  let ans = [];

  dfs(0, 0, 0, 0, []);

  return ans;

  function dfs(index, prevOper, curOper, value, string = []) {
    if (index >= n) {
      if (value == target && curOper == 0) {
        ans.push(string.join('').substring(1));
      }
      return;
    }

    curOper = curOper * 10 + parseInt(num[index]);

    if (curOper > 0) {
      dfs(index + 1, prevOper, curOper, value, string);
    }

    string.push('+');
    string.push(curOper);
    dfs(index + 1, curOper, 0, value + curOper, string);
    string.pop();
    string.pop();

    if (string.length) {
      string.push('-');
      string.push(curOper);
      dfs(index + 1, -curOper, 0, value - curOper, string);
      string.pop();
      string.pop();

      string.push('*');
      string.push(curOper);
      dfs(index + 1, curOper * prevOper, 0, value - prevOper + curOper * prevOper, string);
      string.pop();
      string.pop();
    }
  }
};
