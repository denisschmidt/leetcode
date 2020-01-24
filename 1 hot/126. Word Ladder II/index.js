/*
Given two words (beginWord and endWord), and a dictionary's word list, 
find all shortest transformation sequence(s) from beginWord to endWord, such that:

Only one letter can be changed at a time
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.

Note:
  Return an empty list if there is no such transformation sequence.
  All words have the same length.
  All words contain only lowercase alphabetic characters.
  You may assume no duplicates in the word list.
  You may assume beginWord and endWord are non-empty and are not the same.

Example 1:
  Input:
    beginWord = "hit",
    endWord = "cog",
    wordList = ["hot","dot","dog","lot","log","cog"]

  Output:
  [
    ["hit","hot","dot","dog","cog"],
    ["hit","hot","lot","log","cog"]
  ]

Example 2:
  Input:
    beginWord = "hit"
    endWord = "cog"
    wordList = ["hot","dot","dog","lot","log"]

  Output: []

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

*/

const findLadders = (beginWord, endWord, wordList) => {
  let n = wordList.length;
  let minLen = Number.MAX_VALUE;
  let ans = [];

  let visited = new Set();
  let set = new Set(wordList);

  if (!set.has(endWord)) {
    return false;
  }

  helper([beginWord]);

  return ans;

  function helper(comb) {
    if (comb[comb.length - 1] === endWord) {
      if (comb.length < minLen) {
        ans = [];
        ans.push([...comb]);
        minLen = comb.length;
      } else if (comb.length == minLen) {
        ans.push([...comb]);
      }

      return;
    }
    for (let i = 0; i < n; i++) {
      if (visited.has(i) || !set.has(wordList[i])) continue;

      if (oneEditReplace(comb[comb.length - 1], wordList[i])) {
        comb.push(wordList[i]);
        visited.add(i);

        helper(comb);

        comb.pop();
        visited.delete(i);
      }
    }
  }
};

let beginWord = 'qa',
  endWord = 'sq',
  wordList = [
    'si',
    'go',
    'se',
    'cm',
    'so',
    'ph',
    'mt',
    'db',
    'mb',
    'sb',
    'kr',
    'ln',
    'tm',
    'le',
    'av',
    'sm',
    'ar',
    'ci',
    'ca',
    'br',
    'ti',
    'ba',
    'to',
    'ra',
    'fa',
    'yo',
    'ow',
    'sn',
    'ya',
    'cr',
    'po',
    'fe',
    'ho',
    'ma',
    're',
    'or',
    'rn',
    'au',
    'ur',
    'rh',
    'sr',
    'tc',
    'lt',
    'lo',
    'as',
    'fr',
    'nb',
    'yb',
    'if',
    'pb',
    'ge',
    'th',
    'pm',
    'rb',
    'sh',
    'co',
    'ga',
    'li',
    'ha',
    'hz',
    'no',
    'bi',
    'di',
    'hi',
    'qa',
    'pi',
    'os',
    'uh',
    'wm',
    'an',
    'me',
    'mo',
    'na',
    'la',
    'st',
    'er',
    'sc',
    'ne',
    'mn',
    'mi',
    'am',
    'ex',
    'pt',
    'io',
    'be',
    'fm',
    'ta',
    'tb',
    'ni',
    'mr',
    'pa',
    'he',
    'lr',
    'sq',
    'ye',
  ];

let r = findLadders(beginWord, endWord, wordList);
console.log(r);

function oneEditReplace(s1, s2) {
  if (s1 === s2) return false;
  let foundDifference = false;

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (foundDifference) {
        return false;
      }
      foundDifference = true;
    }
  }
  return true;
}
