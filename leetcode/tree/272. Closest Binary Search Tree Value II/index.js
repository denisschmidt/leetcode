/*

Использую стек предшественников и стек наследников. 
Делаем обход O(logN), чтобы инициализировать их, пока не достигну нулевого узла. 

Затем используем методы getPredecessor и getSuccessor для извлечения k ближайших узлов и обновления стеков.

Временная сложность O(klogn), так как необходимы k BST обходов, и каждый ограничен O(logn) временем. 
Обратите внимание, что это не O (logn + k), что является сложностью по времени для k ближайших чисел в линейном массиве.

*/
const closestKValues = (root, target, k) => {
  let prevStack = [];
  let nextStack = [];

  let node = root;

  while (node !== null) {
    if (node.val >= target) {
      nextStack.push(node);
      node = node.left;
    } else {
      prevStack.push(node);
      node = node.right;
    }
  }

  let res = [];

  while (k > 0) {
    if (!prevStack.length && !nextStack.length) {
      break;
    } else if (!prevStack.length) {
      res.push(getSuccessor(nextStack));
    } else if (!nextStack.length) {
      res.push(getPredecessor(prevStack));
    } else if (Math.abs(target - prevStack[prevStack.length - 1].val) < Math.abs(target - nextStack[nextStack.length - 1].val)) {
      res.push(getPredecessor(prevStack));
    } else {
      res.push(getSuccessor(nextStack));
    }

    k--;
  }

  return res;
};

function getPredecessor(stack) {
  let last = stack.pop();
  node = last.left;

  while (node !== null) {
    stack.push(node);
    node = node.right;
  }

  return last.val;
}

function getSuccessor(stack) {
  let last = stack.pop();
  node = last.right;

  while (node !== null) {
    stack.push(node);
    node = node.left;
  }

  return last.val;
}
