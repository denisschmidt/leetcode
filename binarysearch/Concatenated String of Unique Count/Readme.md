You are given a list of strings words. 

Consider a string that is constructed by concatenating a subsequence of words such that each character is unique. 

Return the length of the longest such concatenation.

**Constraints**
  n ≤ 20 where n is the length of words
  m ≤ 20 where m is the length of longest string in words

```
Example 1
  Input words = ["abc", "abd", "def", "ghi"]
  Output 9

Example 2
  Input words = ["aa", "bb"]
  Output 0
```

**Explanation**
  We Can't pick any word since they contain duplicate characters.