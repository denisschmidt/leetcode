/*

Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. 
If no such solution, return -1.

For example, with A = "abcd" and B = "cdabcdab".

Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").

Note: The length of A and B will be between 1 and 10000.

*/

// KMP
// Time O(N + M)
// Space O(M)
const repeatedStringMatch = (str, pattern) => {
  let lps = calcPrefixAndSuffixPattern(pattern);

  let text = str;
  while (text.length < pattern.length) {
    text += str;
  }

  if (kmp(text, pattern, lps)) {
    return text.length / str.length;
  }

  text += str;

  return kmp(text, pattern, lps) ? text.length / str.length : -1;
};

function kmp(text, pattern, lps) {
  let i = 0;
  let j = 0;

  while (i < text.length && j < pattern.length) {
    if (text[i] == pattern[j]) {
      i++;
      j++;
    } else {
      if (j != 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return j == pattern.length;
}

function calcPrefixAndSuffixPattern(pattern) {
  let n = pattern.length;
  let lps = Array(n).fill(0);

  let counter = 0;
  let i = 1;

  while (i < n) {
    if (pattern[i] == pattern[counter]) {
      lps[i] = counter + 1;
      i++;
      counter++;
    } else {
      if (counter != 0) {
        counter = lps[counter - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return lps;
}

// Time O(N)
// Space O(1);
const repeatedStringMatch_II = (A, B) => {
  let text = A;
  let cnt = 1;

  while (text.length < B.length) {
    text += A;
    cnt++;
  }

  if (text.indexOf(B) > -1) {
    return cnt;
  }

  text += A;

  return text.indexOf(B) != -1 ? cnt + 1 : -1;
};
