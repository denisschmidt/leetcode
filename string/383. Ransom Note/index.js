/*

Given an arbitrary ransom note string and another string containing letters from all the magazines,
write a function that will return true if the ransom note can be constructed from the magazines otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
  You may assume that both strings contain only lowercase letters.

  canConstruct("a", "b") -> false
  canConstruct("aa", "ab") -> false
  canConstruct("aa", "aab") -> true

*/

// Time O(N)
// Space O(N)
const canConstruct = (ransomNote, magazine) => {
  let map = new Map();

  for (let x of magazine) {
    if (!map.has(x)) {
      map.set(x, 1);
    } else {
      map.set(x, map.get(x) + 1);
    }
  }

  for (let x of ransomNote) {
    if (!map.has(x) || map.get(x) <= 0) {
      return false;
    }
    map.set(x, map.get(x) - 1);
  }

  return true;
};
