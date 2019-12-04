/*
Print a binary tree in an m*n 2D string array following these rules:

The row number m should be equal to the height of the given binary tree.
The column number n should always be an odd number.
The root node's value (in string format) should be put in the exactly middle of the first row it can be put. The column and the row where the root node belongs will separate the rest space into two parts (left-bottom part and right-bottom part). You should print the left subtree in the left-bottom part and print the right subtree in the right-bottom part. The left-bottom part and the right-bottom part should have the same size. Even if one subtree is none while the other is not, you don't need to print anything for the none subtree but still need to leave the space as large as that for the other subtree. However, if two subtrees are none, then you don't need to leave space for both of them.
Each unused space should contain an empty string "".
Print the subtrees following the same rules.

Example 1:
  Input:
     1
    /
   2
  Output:
  [["", "1", ""],
  ["2", "", ""]]

Example 2:
  Input:
     1
    / \
   2   3
    \
     4
  Output:
  [["", "", "", "1", "", "", ""],
   ["", "2", "", "", "", "3", ""],
   ["", "", "4", "", "", "", ""]]

Example 3:
  Input:
          1
         / \
        2   5
       /
      3
     /
    4
  Output:
  [["",  "",  "", "",  "", "", "", "1", "",  "",  "",  "",  "", "", ""] 15
   ["",  "",  "", "2", "", "", "", "",  "",  "",  "",  "5", "", "", ""]
   ["",  "3", "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]
   ["4", "",  "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]]

Note: The height of binary tree is in the range of [1, 10].

 */

// Time O(N)
// Space O(N)

// Для выходной матрицы количество строк равно height дерева.
// Количество столбцов может быть получено по формуле числа листьев для полного дерева (2 ^ (height) - 1)
const printTree = root => {
  const ans = [];

  if (root === null) return ans;

  const rows = getHeight(root);
  const cols = Math.pow(2, rows) - 1;

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push('');
    }
    ans.push(row);
  }

  let queue = [root];
  let indexes = [[0, cols - 1]];
  let row = -1;

  while (queue.length) {
    const size = queue.length;
    row++;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      const [left, right] = indexes.shift();
      const mid = left + Math.floor((right - left) / 2);

      if (node !== null) {
        ans[row][mid] = node.val.toString();

        queue.push(node.left);
        queue.push(node.right);
        indexes.push([left, mid - 1]);
        indexes.push([mid + 1, right]);
      }
    }
  }

  return ans;

  function getHeight(node) {
    if (node === null) return 0;
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  }
};
