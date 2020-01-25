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

// Для решения используется обычный BFS
// Единственная хитрость , которую вам нужно запомнить, это BFS путей, а не слов.

// Time O(N^2)
// Space O(N^2)
const findLadders = (beginWord, endWord, wordList) => {
  let queue = [[beginWord]];
  let dict = new Set(wordList);
  let result = [];
  let minLen = Number.MAX_VALUE;
  let level = 1;

  // записи всех посещенных узлов на level
  // эти слова никогда не будут посещаться снова после этого уровня и должены быть удалены из wordList
  // это гарантировано даст нам кратчайший путь
  let visited = new Set();

  while (queue.length > 0) {
    let path = queue.shift();

    if (path.length > level) {
      // удяляем все слова из справочника которые были посещены на текущем уровне
      for (let [word] of visited.entries()) {
        dict.delete(word);
      }

      visited.clear();

      level = path.length;

      // выходим из цикла все кратчайшие пути найдены
      if (level > minLen) {
        break;
      }
    }

    // получаем значение последнего слова в пути
    let lastPath = path[path.length - 1];

    // разбиваем это слово на символы из которых оно состоит
    let characters = lastPath.split('');

    for (let i = 0; i < characters.length; i++) {
      // получаем символ
      let char = characters[i];

      // Пытаемся найти следующую перестановку которая существует в словаре
      // Генерируем все возможные перестановки для заменяя i-ы символ
      for (let j = 0; j < 26; j++) {
        characters[i] = String.fromCharCode(97 + j);

        let newWord = characters.join('');

        if (!dict.has(newWord)) {
          continue;
        }

        visited.add(newWord);

        // создаем копию пути и добавляем новое слово в путь
        let newPath = [...path];

        newPath.push(newWord);

        if (newWord === endWord) {
          result.push(newPath);
          minLen = level;
        } else {
          queue.push(newPath);
        }
      }

      // возвращаем исходный символ в i-ы индекс
      characters[i] = char;
    }
  }

  return result;
};

// TLE Backtrack генерация всех перестановок и проверка каждой перестановки на валидность
// Time O(N!)
// Space O(N^2)
const findLadders_II = (beginWord, endWord, wordList) => {
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
