Given a binary tree root and integers k and distance.

Return a sorted list of values of all nodes that are distance distance away from the node with value k.

For example, given the following tree:

   3
  / \
 5   2
    / \
   1   4
  / \
 6   9
 
and k = 2, distance = 2, return [5, 6, 9].

```
Example 1
  Input root = [0, [0, null, null], null] k = 0 distance = 0
  Output [0]
```