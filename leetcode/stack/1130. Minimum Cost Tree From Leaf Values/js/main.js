/*
Given an array arr of positive integers, consider all binary trees such that:

  1) Each node has either 0 or 2 children;
  2) The values of arr correspond to the values of each leaf in an in-order traversal of the tree.
    (Recall that a node is a leaf if and only if it has 0 children.)

left - root - right обход

Array: [6, 2, 4]

1)

        24 (6 * 4)
       /  \
(6*2) 12    4
     /  \
    6    2

2)

    24 (6 * 4)
   /  \
  6    8 (2 * 4)
      / \
     2   4


[6,2,4]


Мы уменьшаем сложную проблему до легкой
Просто найдите следующий больший элемент в массиве, слева и справа.

Алгоритм аналогичен этой задаче https://leetcode.com/problems/next-greater-element-ii/

 */

// Монотонный стек
// Time O(N)
// Space O(N)
const mctFromLeafValues = nums => {
  let result = 0;
  let stack = [Number.MAX_VALUE];

  for (let num of nums) {
    while (stack[stack.length - 1] <= num) {
      let mid = stack.pop();

      // стоимость удаление числа a из массива === a * min(left, right)
      result += mid * Math.min(stack[stack.length - 1], num);
    }

    stack.push(num);
  }

  while (stack.length > 2) {
    result += stack.pop() * stack[stack.length - 1];
  }

  return result;
};
