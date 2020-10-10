Given a binary tree root, return an inorder traversal of root as a list.

An inorder traversal is a way of visiting all nodes in a tree where you:

Recursively visit the left subtree.
Visit the current node.
Recursively visit the right subtree.
Bonus: Can you do this iteratively?

```
Example 1
  Input root = [1, null, [159, [80, null, null], null]]

Output
  [1, 80, 159]
```