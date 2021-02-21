// Time O(N)
// Space O(K)
const lengthOfLongestSubstringTwoDistinct = str => {
  let map = {};

  for (let x of str) {
    map[x] = 0;
  }

  let start = 0;
  let end = 0;
  let cnt = 0;
  let maxLen = 0;

  while (end < str.length) {
    if (map[str[end]] === 0) {
      cnt++;
    }

    map[str[end]]++;
    end++;

    while (cnt > 2) {
      if (map[str[start]] === 1) {
        cnt--;
      }
      map[str[start]]--;
      start++;
    }

    maxLen = Math.max(maxLen, end - start);
  }

  return maxLen;
};
