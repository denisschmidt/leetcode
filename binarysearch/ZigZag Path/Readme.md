Given a binary tree root, return the longest path that alternates between going down to one child to the other child. 

For example, it may alternate between right child, left child, right child etc. 

Or left child, right child, left child...

For example, given

   0
  / \
 1   9
    / \
   4   2
    \
     3
    /
   7

Return 5 since the longest zigzag path is 0 -> 9 -> 4 -> 3 -> 7.

```
Example 1
  Input root = [0, [0, null, null], null]
  Output 2
```