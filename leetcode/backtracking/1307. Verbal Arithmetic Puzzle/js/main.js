// Backtrack
// Time O(N!)
// Space O(N)
const isSolvable = (words, result) => {
  let visited = Array(10).fill(false);
  let chars = new Set();
  let firstChars = new Set();

  for (let word of words) {
    firstChars.add(word[0]);

    for (let ch of word) {
      chars.add(ch);
    }
  }

  firstChars.add(result[0]);

  for (let ch of result) {
    chars.add(ch);
  }

  return dfs(0, Array.from(chars), new Map());

  function dfs(index, list, memo) {
    if (index == list.length) {
      let a = 0;
      let b = calc(result, memo);

      for (let word of words) a += calc(word, memo);

      return a == b;
    }

    for (let i = 0; i <= 9; i++) {
      if (visited[i] || (i == 0 && firstChars.has(list[index]))) {
        continue;
      }

      visited[i] = true;
      memo.set(list[index], i);

      if (dfs(index + 1, list, memo)) {
        return true;
      }

      memo.set(list[index], 0);
      visited[i] = false;
    }

    return false;
  }

  function calc(word, memo) {
    let sum = 0;
    for (let w of word) {
      sum = sum * 10 + memo.get(w);
    }
    return sum;
  }
};

// TLE
// Backtrack
const isSolvable_II = (words, result) => {
  let map = Array(26).fill(null);
  let visited = Array(10).fill(false);
  let ans = false;
  let list = [];
  let size = result.length;
  words.unshift(result);

  for (let w of words) {
    if (w.length > size) {
      return false;
    }
  }

  for (let word of words) {
    list.push(word.split('').sort());
  }

  console.log(list);

  dfs('', 0, 0, 0, 0);

  return ans;

  function dfs(num, aNum, bNum, chIndex, wordIndex) {
    if (wordIndex == words.length) {
      if (aNum == bNum) {
        ans = true;
      }
      return;
    }

    // first finished
    if (wordIndex == 0 && chIndex == words[0].length) {
      dfs('', parseInt(num), bNum, 0, wordIndex + 1);
      return;
    }

    // other
    if (chIndex == words[wordIndex].length) {
      dfs('', aNum, bNum + parseInt(num), 0, wordIndex + 1);
      return;
    }

    let char = words[wordIndex][chIndex].charCodeAt(0) - 65;

    if (map[char] != null) {
      dfs(num + map[char], aNum, bNum, chIndex + 1, wordIndex);
      return;
    }

    for (let i = 0; i <= 9; i++) {
      if (visited[i] || (i == 0 && chIndex == 0)) {
        continue;
      }

      visited[i] = true;
      map[char] = i;

      if (dfs(num + i, aNum, bNum, chIndex + 1, wordIndex)) {
        return;
      }

      map[char] = null;
      visited[i] = false;
    }
  }
};
