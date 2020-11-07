You are given a two-dimensional list of integers matrix. 

Each cell's value represents its color and adjacent cells (top, bottom, left, right) 
with the same color are considered to be in the same group.

Consider an operation where we set all cells in one group to some color. 

Return the minimum number of operations required so that every cell has the same color. 

Once the color is transformed, it cannot be set again.

Constraints: 
  n, m ≤ 250 where n and m are the number of rows and columns in matrix

```
Example 1
  Input:
    matrix = [
        [1, 1, 1, 1],
        [2, 2, 2, 2],
        [1, 3, 1, 2]
    ]
  Output: 2
  Explanation: We can fill the group with 2 as color into 1 and then fill 3 with 1.
```