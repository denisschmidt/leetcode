/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let stack = [];
  let res = [];
  let n = s.length;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      res.push(s[i]);
      stack.push(i);
    } else if (s[i] == ')') {
      if (stack.length == 0) {
        res.push('@');
      } else {
        stack.pop();
        res.push(s[i]);
      }
    } else {
      res.push(s[i]);
    }
  }

  while (stack.length) {
    let index = stack.pop();
    res[index] = '@';
  }

  return res.filter(x => x != '@').join('');
};

let x = minRemoveToMakeValid('())()(((');
console.log(x);
