/*

Implement a magic directory with buildDict, and search methods.

For the method buildDict, you'll be given a list of non-repetitive words to build a dictionary.

For the method search, you'll be given a word, and judge whether if you modify exactly one character into another character in this word, the modified word is in the dictionary you just built.

Example 1:
  Input: buildDict(["hello", "leetcode"]), Output: Null
  Input: search("hello"), Output: False
  Input: search("hhllo"), Output: True
  Input: search("hell"), Output: False
  Input: search("leetcoded"), Output: False

Note:
  You may assume that all the inputs are consist of lowercase letters a-z.
  For contest purpose, the test data is rather small by now. You could think about highly efficient algorithm after the contest.
  Please remember to RESET your class variables declared in class MagicDictionary, as static/class variables are persisted across multiple test cases. Please see here for more details.

*/

class MagicDictionary {
  constructor() {
    this.map = new Map();
  }

  buildDict(dict) {
    for (let word of dict) {
      for (let i = 0; i < word.length; i++) {
        let key = word.substring(0, i) + word.substring(i + 1);

        if (!this.map.has(key)) {
          this.map.set(key, []);
        }

        this.map.get(key).push([word[i], i]);
      }
    }
  }

  search(word) {
    for (let i = 0; i < word.length; i++) {
      let key = word.substring(0, i) + word.substring(i + 1);

      if (this.map.has(key)) {
        for (let [ch, index] of this.map.get(key)) {
          if (index == i && ch != word[i]) {
            return true;
          }
        }
      }
    }

    return false;
  }
}

// Brute Force
class MagicDictionary_II {
  constructor() {
    this.list = [];
  }

  buildDict(dict) {
    this.list = dict;
  }

  search(word) {
    for (let item of this.list) {
      if (item.length != word.length) continue;

      let cnt = 0;
      for (let i = 0; i < word.length; i++) {
        if (word[i] != item[i]) {
          cnt++;
          if (cnt > 1) break;
        }
      }

      if (cnt == 1) {
        return true;
      }
    }

    return false;
  }
}
