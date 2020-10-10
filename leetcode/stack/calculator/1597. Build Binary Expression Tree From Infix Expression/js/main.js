// Time O(N)
// Space O(N)
const expTree = s => {
  let opStack = [];
  let map = { '+': 0, '-': 0, '*': 1, '/': 1, '(': -1 };
  let nodes = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == ' ') continue;

    if (s[i] == '(') {
      opStack.push('(');
    } else if (s[i] == ')') {
      // apply operations while prev opStack != '('
      while (opStack[opStack.length - 1] != '(') {
        let newNode = applyOperator(opStack.pop(), nodes.pop(), nodes.pop());
        nodes.push(newNode);
      }

      opStack.pop();
    } else if (s[i] in map) {
      while (opStack.length && map[opStack[opStack.length - 1]] >= map[s[i]]) {
        let newNode = applyOperator(opStack.pop(), nodes.pop(), nodes.pop());
        nodes.push(newNode);
      }

      opStack.push(s[i]);
    } else {
      let buffer = '';
      while (i < s.length && s[i] >= 0 && s[i] <= 9) {
        buffer += s[i++];
      }
      nodes.push(new Node(buffer));
      i--;
    }
  }

  while (opStack.length) {
    let newNode = applyOperator(opStack.pop(), nodes.pop(), nodes.pop());
    nodes.push(newNode);
  }

  return nodes.pop();

  function Node(val, left, right) {
    this.val = val === undefined ? ' ' : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }

  function applyOperator(oper, node1, node2) {
    let node = new Node(oper);
    node.right = node1;
    node.left = node2;
    return node;
  }
};
