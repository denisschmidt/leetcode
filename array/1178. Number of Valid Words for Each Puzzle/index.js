/*

With respect to a given puzzle string, a word is valid if both the following conditions are satisfied:

  1) word contains the first letter of puzzle.
  2) For each letter in word, that letter is in puzzle.
  For example, if the puzzle is "abcdefg", then valid words are "faced", "cabbage", and "baggage"; while invalid words are "beefed" (doesn't include "a") and "based" (includes "s" which isn't in the puzzle).
  Return an array answer, where answer[i] is the number of words in the given word list words that are valid with respect to the puzzle puzzles[i].
 

Example :

  Input:
    words = ["aaaa","asas","able","ability","actt","actor","access"],
    puzzles = ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]

  Output: [1,1,3,2,4,0]

  Explanation:
    1 valid word for "aboveyz" : "aaaa"
    1 valid word for "abrodyz" : "aaaa"
    3 valid words for "abslute" : "aaaa", "asas", "able"
    2 valid words for "absoryz" : "aaaa", "asas"
    4 valid words for "actresz" : "aaaa", "asas", "actt", "access"
    There're no valid words for "gaswxyz" cause none of the words in the list contains letter 'g'.
 
Constraints:
  1 <= words.length <= 10^5
  4 <= words[i].length <= 50
  1 <= puzzles.length <= 10^4
  puzzles[i].length == 7
  words[i][j], puzzles[i][j] are English lowercase letters.
  Each puzzles[i] doesn't contain repeated characters.

 */

// Time O(N^2)
// Space O(N)
const findNumOfValidWords = (words, puzzles) => {
  let puzzlesLetters = [];
  let firstLetter = [];

  for (let i = 0; i < puzzles.length; i++) {
    puzzlesLetters[i] = firstLetter[i] = 1 << (puzzles[i][0].charCodeAt(0) - 'a'.charCodeAt(0));

    for (let j = 1; j < puzzles[i].length; j++) {
      puzzlesLetters[i] |= 1 << (puzzles[i][j].charCodeAt(0) - 'a'.charCodeAt(0));
    }
  }

  const ans = Array(puzzles.length).fill(0);
  for (let i = 0; i < words.length; i++) {
    let wordsLetters = 0;
    for (let j = 0; j < words[i].length; j++) {
      wordsLetters |= 1 << (words[i][j].charCodeAt(0) - 'a'.charCodeAt(0));
    }

    for (let j = 0; j < puzzles.length; j++) {
      if ((puzzlesLetters[j] & wordsLetters) === wordsLetters && (firstLetter[j] & wordsLetters) === firstLetter[j]) {
        ans[j]++;
      }
    }
  }
  return ans;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const findNumOfValidWords3 = function(words, puzzles) {
  let n = puzzles.length,
    offset = 'a'.charCodeAt();
  let res = new Array(n).fill(0);
  let cnt = {};

  for (let w of words) {
    let mask = 0;
    for (let c of w) {
      mask |= 1 << (c.charCodeAt() - offset);
    }
    cnt[mask] = ~~cnt[mask] + 1;
  }
  for (let i = 0; i < n; i++) {
    let s = puzzles[i],
      len = s.length;
    for (let k = 0; k < 1 << (len - 1); k++) {
      let mask = 1 << (s[0].charCodeAt() - offset);
      for (let j = 0; j < len - 1; j++) {
        if (k & (1 << j)) {
          mask |= 1 << (s[j + 1].charCodeAt() - offset);
        }
      }
      res[i] += ~~cnt[mask];
    }
  }
  return res;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TLE
const findNumOfValidWords2 = (words, puzzles) => {
  const map = {};
  const ans = [];

  for (let p of puzzles) {
    map[p] = new Set();
    for (let w of p) {
      if (map[p].has(w)) continue;
      map[p].add(w);
    }
  }

  for (let p of puzzles) {
    const set = map[p];
    let count = 0;
    for (let word of words) {
      if (word.indexOf(p[0]) === -1) continue;
      let i = 0;
      while (i < word.length) {
        if (!set.has(word[i])) break;
        i++;
      }

      if (i === word.length) {
        count++;
      }
    }
    ans.push(count);
  }

  return ans;
};
