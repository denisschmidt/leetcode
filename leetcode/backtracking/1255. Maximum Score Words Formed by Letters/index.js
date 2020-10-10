/*

Given a list of words, list of  single letters (might be repeating) and score of every character.

Return the maximum score of any valid set of words formed by using the given letters (words[i] cannot be used two or more times).

It is not necessary to use all characters in letters and each letter can only be used once. 


Score of letters 'a', 'b', 'c', ... ,'z' is given by score[0], score[1], ... , score[25] respectively.

Example 1:
  Input: words = ["dog","cat","dad","good"], letters = ["a","a","c","d","d","d","g","o","o"], score = [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]
  Output: 23
  Explanation:
  Score  a=1, c=9, d=5, g=3, o=2
  Given letters, we can form the words "dad" (5+1+5) and "good" (3+2+2+5) with a score of 23.
  Words "dad" and "dog" only get a score of 21.

Example 2:
  Input: words = ["xxxz","ax","bx","cx"], letters = ["z","a","b","c","x","x","x"], score = [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10]
  Output: 27
  Explanation:
  Score  a=4, b=4, c=4, x=5, z=10
  Given letters, we can form the words "ax" (4+5), "bx" (4+5) and "cx" (4+5) with a score of 27.
  Word "xxxz" only get a score of 25.

Example 3:
  Input: words = ["leetcode"], letters = ["l","e","t","c","o","d"], score = [0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0]
  Output: 0
  Explanation:
  Letter "e" can only be used once.
  

Constraints:
  1 <= words.length <= 14
  1 <= words[i].length <= 15
  1 <= letters.length <= 100
  letters[i].length == 1
  score.length == 26
  0 <= score[i] <= 10
  words[i], letters[i] contains only lower case English letters.

*/

const maxScoreWords = (words, letters, score) => {
  let count = Array(26).fill(0);

  for (let w of letters) {
    count[w.charCodeAt(0) - 97] = ~~count[w.charCodeAt(0) - 97] + 1;
  }

  return helper(count, 0);

  function helper(count, index) {
    let max = 0;
    for (let i = index; i < words.length; i++) {
      let res = 0;
      let isValid = true;

      for (let ch of words[i]) {
        let k = ch.charCodeAt(0) - 97;
        count[k]--;
        res += score[k];
        if (count[k] < 0) {
          isValid = false;
        }
      }
      if (isValid) {
        res += helper(count, i + 1);
        max = Math.max(res, max);
      }
      for (let ch of words[i]) {
        count[ch.charCodeAt(0) - 97]++;
        res = 0;
      }
    }
    return max;
  }
};

const maxScoreWords_II = (words, letters, score) => {
  let points = new Map();
  let count = Array(26).fill(0);

  for (let w of letters) {
    count[w.charCodeAt(0) - 97] = ~~count[w.charCodeAt(0) - 97] + 1;
  }

  return dfs(count, 0);

  function dfs(count, index) {
    if (index >= words.length) {
      return 0;
    }

    let x = dfs(count, index + 1);
    let copy = [...count];

    let point = 0;
    let isValid = true;

    for (let w of words[index]) {
      let k = w.charCodeAt(0) - 97;
      copy[k]--;
      point += score[k];
      if (copy[k] < 0) isValid = false;
    }

    return Math.max(x, isValid ? point + dfs(copy, index + 1) : 0);
  }
};
