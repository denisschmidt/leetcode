// Time O(N*M)
// Space O(N*M)
/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
const numWays = (words, target) => {
  let n = words[0].length;
  let mod = 1e9 + 7;
  let charAtIndexCnt = new Map();

  for (let word of words) {
    for (let i = 0; i < word.length; i++) {
      if (!charAtIndexCnt.has(word[i])) {
        charAtIndexCnt.set(word[i], Array(n).fill(0));
      }
      charAtIndexCnt.get(word[i])[i]++;
    }
  }

  let dp = Array(n)
    .fill(false)
    .map(() => Array(n).fill(null));

  return dfs(0, 0);

  function dfs(wordIndex, targetIndex) {
    if (targetIndex >= target.length) {
      return 1;
    }

    if (wordIndex >= n) {
      return 0;
    }

    if (dp[wordIndex][targetIndex] != null) {
      return dp[wordIndex][targetIndex];
    }

    let char = target[targetIndex];

    let res = dfs(wordIndex + 1, targetIndex);

    if (charAtIndexCnt.has(char) && charAtIndexCnt.get(char)[wordIndex] > 0) {
      res += dfs(wordIndex + 1, targetIndex + 1) * charAtIndexCnt.get(char)[wordIndex];
      res %= mod;
    }

    dp[wordIndex][targetIndex] = res;

    return res;
  }
};

/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
const numWays_II = (words, target) => {
  let n = words[0].length;
  let mod = 1e9 + 7;
  let counter = [];

  for (let i = 0; i < words.length; i++) {
    if (!counter[i]) {
      counter[i] = {};
    }
    for (let ch of words[i]) {
      counter[i][ch] = ~~counter[i][ch] + 1;
    }
  }

  let dp = Array(n)
    .fill(false)
    .map(() => Array(n).fill(null));

  return dfs(0, 0, 0);

  function dfs(wordIndex, targetIndex) {
    if (targetIndex >= target.length) {
      return 1;
    }

    if (wordIndex >= n) {
      return 0;
    }

    if (dp[wordIndex][targetIndex] != null) {
      return dp[wordIndex][targetIndex];
    }

    let res = 0;

    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let obj = counter[i];

      if (target[targetIndex] in obj && obj[target[targetIndex]] > 0) {
        for (let j = wordIndex; j < word.length; j++) {
          if (word[j] == target[targetIndex]) {
            obj[target[targetIndex]]--;
            res += dfs(j + 1, targetIndex + 1);
            res %= mod;
            obj[target[targetIndex]]++;
          }
        }
      }
    }

    dp[wordIndex][targetIndex] = res;

    return res;
  }
};
