/*
Given a string s and an integer k, find out if the given string is a K-Palindrome or not.

A string is K-Palindrome if it can be transformed into a palindrome by removing at most k characters from it.

Example 1:
  Input: s = "abcdeca", k = 2
  Output: true
  Explanation: Remove 'b' and 'e' characters.
 

Constraints:
  1 <= s.length <= 1000
  s has only lowercase English letters.
  1 <= k <= s.length
*/

const isValidPalindrome = function(s, k) {
  let dp = Array(s.length)
    .fill(null)
    .map(() => Array(s.length).fill(false));
  let maxLen = 0;
  let comb = [];

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        if (j - i < 3 || dp[i + 1][j - 1]) {
          dp[i][j] = true;
        } else {
          let k = i;
          let h = j;

          while (k + 1 <= h - 1 && dp[k + 1][h - 1] === false) {
            k++;
            h--;
          }

          console.log(k, h, dp[k][h], i, j);
        }
      }

      if (dp[i][j] && j - i + 1 >= maxLen) {
        maxLen = Math.max(maxLen, j - i + 1);
        comb.push(s.substring(i, j + 1));
      }
    }
  }
};

// cdec

isValidPalindrome('abcdeca');

// TLE
const isValidPalindrome_II = function(s, k) {
  let queue = [];
  let visited = new Set();
  queue.push(s);

  while (queue.length) {
    let str = queue.shift();

    if (s.length - str.length > k) {
      return false;
    }

    if (isValid(str)) {
      return true;
    }

    for (let i = 0; i < str.length; i++) {
      let newStr = str.substring(0, i) + str.substring(i + 1);

      if (visited.has(newStr)) continue;

      visited.add(newStr);
      queue.push(newStr);
    }
  }
};

isValidPalindrome('abcdeca', 2);

function isValid(s) {
  let lo = 0;
  let hi = s.length - 1;

  while (lo < hi) {
    if (s[lo] !== s[hi]) {
      return false;
    }
    lo++;
    hi--;
  }

  return true;
}
