/*

28. Implement strStr()

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

We can solve this problem using

Boyer Moore: https://en.wikipedia.org/wiki/Boyer–Moore_string-search_algorithm
KMP: https://en.wikipedia.org/wiki/Knuth–Morris–Pratt_algorithm

 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// O(N^2)
var strStr = function(haystack, needle) {
  if (needle.length === 0) return 0;
  if (haystack.length === 0) return -1;

  for (let start = 0; start < haystack.length; start++) {
    if (start + needle.length > haystack.length) break;

    for (let end = 0; end < needle.length; end++) {
      if (haystack[start + end] !== needle[end]) break;

      if (end === needle.length - 1) return start;
    }
  }
  return -1;
};

const res = strStr('mississippi', 'issi');
console.log('---', res);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// O(N^2)
var strStr = function(haystack, needle) {
  if (needle.length === 0) return 0;

  let end = 0;
  let isValid = false;

  for (let start = 0; start < haystack.length; start++) {
    let end = start + needle.length;
    isValid = true;

    let s1 = haystack.substring(start, end);

    if (s1 === needle) {
      return start;
    }
  }
  return -1;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
