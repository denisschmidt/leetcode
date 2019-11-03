/*
Given a binary tree, return the postorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [3,2,1]
Follow up: Recursive solution is trivial, could you do it iteratively?

Посетить узлы нужно в порядке left-right-root

 */

// Решение через один стек
// https://www.youtube.com/watch?v=xLQKdq0Ffjg
/*
      10
     /  \
   -6    15
     \
      8

ans -> 8 -6 15 10


      10
     /  \
   -6    15
     \
      8
      
stack -> [-6, 10]

ans -> 8 -6 15 10


left - right - root

мы максимально уходим по левой ветке 
если у нас нету левой ветки поднимается по стеку 
и пытаемся уйти в правую ветку
если нету ни левой ни правой ветки то добавляем знаение в ответ

Time O(N)
Space O(H)

 */
const postorderTraversal = root => {
  let cur = root;
  const stack = [];
  const ans = [];

  while (cur != null || stack.length) {
    if (cur) {
      stack.unshift(cur);
      cur = cur.left;
    } else {
      let temp = stack[0].right;

      if (temp === null) {
        // удаляем из стека первый элемент
        // так как он самый нижний
        // и у него нету правого поддерева и левого
        temp = stack.shift();

        // добавляем его в результат
        ans.push(temp.val);

        while (stack.length && temp === stack[0].right) {
          // поднимаемся вверх по дереву
          // так как temp - это ребенок значения из стека
          // мы добавляем его в ответ
          // так как это по сути наш root и у нас нету других больше значений
          // потом поднимаемся еще выше и уже видим что у нас есть еще другие элементы в правом поддереве
          temp = stack.shift();
          ans.push(temp.val);
        }
      } else {
        cur = temp;
      }
    }
  }

  return ans;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N)
// Space O(N)
// Решение через два стека s1 и s2
const postorderTraversal2 = function(root) {
  if (root === null) return [];

  const stack1 = [];
  const stack2 = [];

  stack1.push(root);

  while (stack1.length) {
    const node = stack1.pop();
    stack2.push(node.val);

    if (node.left) {
      stack1.push(node.left);
    }

    if (node.right) {
      stack1.push(node.right);
    }
  }

  return stack2.reverse();
};
