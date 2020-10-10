/*
Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path 1->2->3 which represents the number 123.

Find the total sum of all root-to-leaf numbers.

Note: A leaf is a node with no children.

Example:

Input: [1,2,3]
    1
   / \
  2   3
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.
Example 2:

Input: [4,9,0,5,1]
    4
   / \
  9   0
 / \
5   1
Output: 1026

Explanation:
The root-to-leaf path 4->9->5 represents the number 495.
The root-to-leaf path 4->9->1 represents the number 491.
The root-to-leaf path 4->0 represents the number 40.
Therefore, sum = 495 + 491 + 40 = 1026.

 */

// Time O(N)
// Space O(1)
const sumNumbers = function (root) {
  return helper(root, 0);

  function helper(node, sum = 0) {
    if (node === null) return 0;

    sum = sum * 10 + node.val;

    if (node.right === null && node.left === null) return sum;

    const leftSum = helper(node.left, sum);

    /*

       9
     /   \
    5     1

    На этом этапе сумма левой половины у нас уже есть, текущая нода та у которой левая и правая часть равны null это 5

    Переменная node содержит ноду предыдущую по стеку тоесть ноду 9 ее сумма равна 9 нам надо посчитать правую половину

     */

    const rightSum = helper(node.right, sum);

    /*

    Тут node - это таже самая нода 9 и у нас уже есть сумма правой ноды
      
    Вернем результат обеих нод

     */

    return leftSum + rightSum;
  }
};
