/*

Given all the nodes of an N-ary tree as an array  Node[] tree where each node has a unique value.

Find and return the root of the N-ary tree.

Follow up:
  Could you solve this problem in constant space complexity with a linear time algorithm?

  Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

  For example, the above tree is serialized as [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14].


Custom testing:
  You should provide the serialization of the input tree.
  The Driver code then extracts the nodes from the tree and shuffles them. You shouldn't care how the extracted nodes are shuffled.
  The driver code will provide you with an array of the extracted nodes in random order and you need to find the root of the tree out of these nodes.

Example 1:
  Input: tree = [1,null,3,2,4,null,5,6]
  Output: [1,null,3,2,4,null,5,6]
  Explanation: The input tree is shown above. The driver code first extracts the nodes so we now have an array of all tree nodes [Node(1),Node(3),Node(2),Node(4),Node(5),Node(6)], then the array is randomly shuffled, thus the actual input is [Node(5),Node(4),Node(3),Node(6),Node(2),Node(1)].
  The root of the tree is Node(1) and the output is the serialization of the node you return.

Example 2:
  Input: tree = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
  Output: [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
  

Constraints:
  The total number of nodes is between [1, 5 * 10^4].
  Each node has a unique value.

*/

// Time O(N^2)
// Space O(N)
const findRoot = tree => {
  for (let node of tree) {
    let cntNodes = dfs(node.children);

    if (tree.length == cntNodes + 1) {
      return node;
    }
  }

  return null;

  function dfs(nodes) {
    if (nodes.length == 0) return 0;

    let res = 0;
    for (let node of nodes) {
      res += dfs(node.children) + 1;
    }

    return res;
  }
};
