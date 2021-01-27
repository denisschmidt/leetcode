You are given a lowercase alphabet string s. In one operation, you can remove, insert or update any character in s. Return the minimum number of operations required such that s = t + t for any t.

Constraints:
  0 ≤ n ≤ 100 where n is the length of s

```
Example 1
  Input: s = "abczbdc"
  Output: 2
  Explanation:
    If we replace the "z" to "a" and remove the "d", then we get s = "abc" + "abc"
```
