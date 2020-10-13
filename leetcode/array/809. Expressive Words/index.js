/*
Sometimes people repeat letters to represent extra feeling, such as "hello" -> "heeellooo", "hi" -> "hiiii".  
In these strings like "heeellooo", we have groups of adjacent letters that are all the same:  "h", "eee", "ll", "ooo".

For some given string S, a query word is stretchy if it can be made to be equal to S by any number of applications of the following extension operation: 
choose a group consisting of characters c, and add some number of characters c to the group so that the size of the group is 3 or more.

For example, starting with "hello", we could do an extension on the group "o" to get "hellooo", 
but we cannot get "helloo" since the group "oo" has size less than 3.  

Also, we could do another extension like "ll" -> "lllll" to get "helllllooo".  
If S = "helllllooo", then the query word "hello" would be stretchy because of these two extension operations: 
query = "hello" -> "hellooo" -> "helllllooo" = S.

Given a list of query words, return the number of words that are stretchy. 

Example:
  Input: S = "heeellooo" words = ["hello", "hi", "helo"]
  Output: 1

  Explanation: 
    We can extend "e" and "o" in the word "hello" to get "heeellooo".
    We can't extend "helo" to get "heeellooo" because the group "ll" is not size 3 or more.

Notes:
  0 <= len(S) <= 100.
  0 <= len(words) <= 100.
  0 <= len(words[i]) <= 100.
  S and all words in words consist only of lowercase letters

 */

// Time O(N^2)
// Space O(1)
const expressiveWords = function (str, words) {
  let cnt = 0;

  for (let word of words) {
    if (helper(str, word)) {
      cnt++;
    }
  }

  return cnt;

  function helper(s1, s2) {
    let i = 0;
    let j = 0;
    let i1 = 0;
    let j1 = 0;

    while (i < s1.length && j < s2.length) {
      i = i1;
      j = j1;
      if (s1[i] !== s2[j]) return false;
      while (i1 < s1.length && s1[i] === s1[i1]) i1++;
      while (j1 < s2.length && s2[j] === s2[j1]) j1++;

      if (i1 - i !== j1 - j && i1 - i < Math.max(3, j1 - j)) return false;
    }

    return i === s1.length && j === s2.length;
  }
};