/*

abcdaf => acbcf

   |   | a | b | c | d | a  | f |
---|-----------------------------
   |[0]| 0 | 0 | 0 | 0 | 0  | 0 |
---|-----------------------------
 a | 0 |[1]| 1 | 1 | 1 | 1  | 1 |
---|-----------------------------
 c | 0 |[1]| 1 | 2 | 2 | 2 | 2  |
---|-----------------------------
 b | 0 | 1 |[2]| 2 | 2 | 2 | 2  |
---|----------------------------|
 c | 0 | 1 | 2 |[3]|[3]|[3]| 3  |
---------------------------------
 f | 0 | 1 | 2 | 3 | 3 | 3 |[4] |
---------------------------------

 Recover path:
 Current path equal = 4

 4 => if (str1 === str2) => new path equal dp[i - 1][j - 1] => 3


 Current path equeal = 3

 3 => if (str1 !== str2_ => new path equal max(dp[i - 1][j], dp[i][j-1)) === 3
 3 => if (str1 !== str2_ => new path equal max(dp[i - 1][j], dp[i][j-1)) === 3
 3 => if (str1 !== str2_ => new path equal max(dp[i - 1][j], dp[i][j-1)) === 3

result => abcf

 */
const longestCommonSupersequence = function (str1, str2) {
  const s1 = str1.length;
  const s2 = str2.length;
  const dp = [[]];

  for (let i = 0; i <= s1; i++) {
    if (!dp[i]) {
      dp[i] = [];
    }
    for (let j = 0; j <= s2; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0;
      } else if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let index = dp[s1][s2];
  let ans = [];
  let i = s1;
  let j = s2;

  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      ans[index - 1] = str1[i - 1];
      i--;
      j--;
      index--;
    } else if (dp[i - 1][j] < dp[i][j - 1]) {
      j--;
    } else {
      i--;
    }
  }

  return ans;
};

const res = longestCommonSupersequence('abcdaf', 'acbcf');
console.log('----', res);
