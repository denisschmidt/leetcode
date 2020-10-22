Implement a trie data structure with the following methods:

Trie() constructs a new instance of a trie
  add(String word) adds a word into the trie
  exists(String word) returns whether word exists in the trie
  startswith(String p) returns whether there's some word whose prefix is p

**Constraints**
  n ≤ 100,000 where n is the number of calls to add, exists and startswith

```
Example 1
  Input
    methods = ["constructor", "add", "add", "exists", "startswith", "exists"]
    arguments = [[], ["dog"], ["document"], ["dog"], ["doc"], ["doge"]]
  Output [None, None, None, True, True, False]
```

**Explanation**
  We create a Trie
  We add the word "dog" to the trie
  We add the word "document" to the trie
  We check whether "dog" exists in the trie which it does
  We check whether there is some word whose prefix is "doc" which there is ("document)
  We check whether "doge" exists in the trie which it does not