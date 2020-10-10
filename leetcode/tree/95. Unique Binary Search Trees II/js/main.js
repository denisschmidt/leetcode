/*
Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1 ... n.

Example:

Input: 3
Output:
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
Explanation:
The above output corresponds to the 5 unique BST's shown below:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3


Кол-во возможных деверьев поиска(BST) равно  на самом деле является каталонским числом.

Выберем любое чистло из масиива от 1 до N

Тогда кол-во левых поддеревьев будет равно i - 1 и n - i число правых поддеревьев

Это приводит к тому, что G (i - 1) - разные левые поддеревья, а G (n - i) - разные правые поддеревья, где G - каталонское число.


Теперь давайте повторим шаг выше для последовательности 1 ... i - 1, чтобы построить все левые поддеревья, а затем для последовательности i + 1 ... n,
чтобы построить все правые поддеревья.

Таким образом, у нас есть корень i и два списка для возможных левых и правых поддеревьев.
Последний шаг - перебрать оба списка, чтобы связать левое и правое поддеревья с корнем.

 */

// Time O(N * Gn) основные вычисления состоят в том, чтобы построить все возможные деревья с заданным корнем,
// который на самом деле является каталонским числом Gn * N   как обсуждалось выше. И это делается n раз
// Space O(N * Gn)
const generateTrees = n => {
  if (n == 0) return [];

  return dfs(1, n);

  function dfs(start, end) {
    if (start > end) {
      return [null];
    }

    let res = [];

    for (let num = start; num <= end; num++) {
      let left = dfs(start, num - 1);
      let right = dfs(num + 1, end);

      for (l of left) {
        for (r of right) {
          let node = new TreeNode(num);
          node.left = l;
          node.right = r;
          res.push(node);
        }
      }
    }
    return res;
  }
};
