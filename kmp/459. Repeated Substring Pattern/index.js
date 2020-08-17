/*

Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. 
You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

Example 1:
  Input: "abab"
  Output: True
  Explanation: It's the substring "ab" twice.

Example 2:
  Input: "aba"
  Output: False

Example 3:
  Input: "abcabcabcabc"
  Output: True
  Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)

*/

/*

  lps[index] обозначает самую длинную общую строку строки префикса, и строка заканчивается позицией i.
  
  Важным моментом является последнее: n % (n - lps[n - 1]) == 0 
  
  Пример: lps[n - 1] = 15, n = 20: 
  
  ##### ~~~~~ ^^^^^ $$$$$ 
  ##### ~~~~~ ^^^^^ $$$$$ 
  
  при lps[n - 1] = 15  

  Следующие строки будут одинаковыми
  ##### == ~~~~~ 
  ~~~~~ == ^^^^^ 
  ^^^^^ == $$$$$ 
  
  Длинна ##### делится без остатка на n,  следовательно паттерн ##### будет повторяться во всей строке.

  Так же lps[n] означает что substr(0, lps[n]) == substr(n - lps[n], lps[n]).

*/

// Time O(N)
// Space O(N)
const repeatedSubstringPattern = str => {
  if (str.length == 1 || str.length == 0) return false;

  let n = str.length;
  let longestPrefixLen = calcPrefixAndSuffixPattern(str);

  return longestPrefixLen > 0 && n % (n - longestPrefixLen) == 0;

  function calcPrefixAndSuffixPattern(pattern) {
    let n = pattern.length;
    let lps = Array(n).fill(0);

    let i = 1;
    let index = 0;

    while (i < n) {
      if (pattern[i] == pattern[index]) {
        lps[i] = index + 1;
        i++;
        index++;
      } else {
        if (index != 0) {
          index = lps[index - 1];
        } else {
          lp[i] = 0;
          i++;
        }
      }
    }

    return lps[n - 1];
  }
};

// Time O((N / 2) * (N / 2))
// Space O(1)
const repeatedSubstringPattern_II = str => {
  if (str == null || str.length == 0) return true;

  let n = str.length;

  for (let len = Math.floor(n / 2); len >= 1; len--) {
    if (n % len != 0) continue;

    let pattern = str.substring(0, len);

    let substr = '';

    for (let k = 0; k < n / len; k++) {
      substr += pattern;
    }

    if (substr == str) return true;
  }

  return false;
};
