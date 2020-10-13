Run-length encoding is a fast and simple method of encoding strings. 

The basic idea is to represent repeated successive characters as a single count and character. 

For example, the string "aaabbbccda" would be encoded as "3a3b2c1d1a".

Given a run-length encoded lowercase alphabet string s, implement an iterator which is the decoded version of s:

next() polls the next element in the iterator
hasnext() which returns whether the next element exists

**Constraints** 
  n ≤ 100,000 where n is the number of calls to next and hasnext

```
Example 1
  Input methods = ["constructor", "next", "hasnext", "next", "next", "hasnext"]
        arguments = [["2a1b"], [], [], [], [], []]
  Output [null, "a", true, "a", "b", false]
```