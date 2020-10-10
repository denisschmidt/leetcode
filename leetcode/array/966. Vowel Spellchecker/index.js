/*

Given a wordlist, we want to implement a spellchecker that converts a query word into a correct word.

For a given query word, the spell checker handles two categories of spelling mistakes:

Capitalization: If the query matches a word in the wordlist (case-insensitive), then the query word is returned with the same case as the case in the wordlist.
  Example: wordlist = ["yellow"], query = "YellOw": correct = "yellow"
  Example: wordlist = ["Yellow"], query = "yellow": correct = "Yellow"
  Example: wordlist = ["yellow"], query = "yellow": correct = "yellow"

Vowel Errors: If after replacing the vowels ('a', 'e', 'i', 'o', 'u') of the query word with any vowel individually, it matches a word in the wordlist (case-insensitive), then the query word is returned with the same case as the match in the wordlist.
  Example: wordlist = ["YellOw"], query = "yollow": correct = "YellOw"
  Example: wordlist = ["YellOw"], query = "yeellow": correct = "" (no match)
  Example: wordlist = ["YellOw"], query = "yllw": correct = "" (no match)

In addition, the spell checker operates under the following precedence rules:
  
  When the query exactly matches a word in the wordlist (case-sensitive), you should return the same word back.
  When the query matches a word up to capitlization, you should return the first such match in the wordlist.
  When the query matches a word up to vowel errors, you should return the first such match in the wordlist.
  If the query has no matches in the wordlist, you should return the empty string.
  Given some queries, return a list of words answer, where answer[i] is the correct word for query = queries[i].

Example 1:
  Input: wordlist = ["KiTe","kite","hare","Hare"], queries = ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"]
  Output: ["kite","KiTe","KiTe","Hare","hare","","","KiTe","","KiTe"]
  
Note:
  1 <= wordlist.length <= 5000
  1 <= queries.length <= 5000
  1 <= wordlist[i].length <= 7
  1 <= queries[i].length <= 7
  All strings in wordlist and queries consist only of english letters.

*/

// Time O(C) C - is the total content of wordlist and queries
// Space O(C)
var spellchecker = function (wordlist, queries) {
  let ans = [];
  let vowelsSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  let words_perfect = new Set();
  let words_cap = new Map();
  let words_vow = new Map();

  for (let word of wordlist) {
    words_perfect.add(word);

    let lowerCaseWord = word.toLowerCase();

    if (!words_cap.has(lowerCaseWord)) {
      words_cap.set(lowerCaseWord, word);
    }

    let replacedWord = devowel(lowerCaseWord);

    if (!words_vow.has(replacedWord)) {
      words_vow.set(replacedWord, word);
    }
  }

  for (let query of queries) {
    if (words_perfect.has(query)) {
      ans.push(query);
    } else if (words_cap.has(query.toLowerCase())) {
      ans.push(words_cap.get(query.toLowerCase()));
    } else {
      let replacedWord = devowel(query.toLowerCase());

      if (words_vow.has(replacedWord)) {
        ans.push(words_vow.get(replacedWord));
      } else {
        ans.push('');
      }
    }
  }

  return ans;

  function devowel(word) {
    let res = '';
    for (let w of word) {
      res += vowelsSet.has(w) ? '*' : w;
    }
    return res;
  }
};
