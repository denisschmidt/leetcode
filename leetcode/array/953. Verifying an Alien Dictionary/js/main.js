// Time O(N^2)
// Space O(N)
const isAlienSorted = (words, order) => {
  let map = new Map();
  let i = 0;

  for (let ch of order) {
    map.set(ch, i++);
  }

  let nonSortedWords = [...words];
  words.sort(compare);

  for (let i = 0; i < nonSortedWords.length; i++) {
    if (nonSortedWords[i] != words[i]) {
      return false;
    }
  }

  return true;

  function compare(a, b) {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      if (a[i] == b[i]) {
        continue;
      }

      return map.get(a[i]) - map.get(b[i]);
    }

    return a.length - b.length;
  }
};
