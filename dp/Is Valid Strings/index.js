// Write a function checking that the given string is valid. We consider a string
// to be valid if all the characters of the string have exactly the same frequency.

// Examples:
// "aabbcc" is a valid string
// "aabbccc" is an invalid string

// [1, 2, 1, 2, 1, 2, 3]

// Time complexity : O(n^2) two loops of n are there.
// Space complexity : O(n). dp array of size nn is used.

function isValidString(str) {
  let size = str.length;
  let dp = [];
  let ans = 0;
  let maxValue = Number.MIN_VALUE;

  dp[0] = 1;
  for (let i = 0; i < size; i++) {
    ans = 0;
    for (let j = 0; j < i; j++) {
      if (str[i] === str[j]) {
        ans = Math.max(ans, dp[j]);
      }
    }
    dp[i] = ans + 1;
    maxValue = Math.max(maxValue, dp[i]);
  }

  console.log('---', dp);

  return maxValue;
}

// [1, 2, 1, 2, 3, 4, 1, 2]; -> 4 -> 2
isValidString('aabbaacc');

function isValidString2(str) {
  let dp = [];
  let cnt = [];
  let maxdp = 0;
  let res = 0;
  const size = str.length;

  for (let i = 0; i < size; i++) {
    dp[i] = 1;
    cnt[i] = 1;
    for (let j = 0; j < i; j++) {
      if (str[i] === str[j]) {
        if (dp[i] === dp[j] + 1) {
          cnt[i] += cnt[j];
        }
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          cnt[i] = cnt[j];
        }
      }
    }
    if (maxdp === dp[i]) {
      res += cnt[i];
    }
    if (maxdp < dp[i]) {
      maxdp = dp[i];
      res = cnt[i];
    }
  }

  return res;
}

isValidString2('aabbaacc');

function isValidString3(str) {
  const size = str.length;
  const map = new Map();

  for (let i = 0; i < size; i++) {
    if (!map.has(str[i])) {
      map.set(str[i], 1);
    } else {
      map.set(str[i], map.get(str[i]) + 1);
    }
  }

  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;

  for (let val of map.values()) {
    min = Math.min(min, val);
    max = Math.max(max, val);
  }

  return max === min;
}

isValidString3('aabbaacc');
