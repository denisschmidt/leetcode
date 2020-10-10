/*

Given a string s of lowercase letters, you need to find the maximum number of non-empty substrings of s that meet the following conditions:

The substrings do not overlap, that is for any two substrings s[i..j] and s[k..l], either j < k or i > l is true.
A substring that contains a certain character c must also contain all occurrences of c.
Find the maximum number of substrings that meet the above conditions. 

If there are multiple solutions with the same number of substrings, return the one with minimum total length. 

It can be shown that there exists a unique solution of minimum total length.

Notice that you can return the substrings in any order.

Example 1:
  Input: s = "adefaddaccc"
  Output: ["e","f","ccc"]
  Explanation: The following are all the possible substrings that meet the conditions:
  [
    "adefaddaccc"
    "adefadda",
    "ef",
    "e",
    "f",
    "ccc",
  ]
  If we choose the first string, we cannot choose anything else and we'd get only 1. If we choose "adefadda", we are left with "ccc" which is the only one that doesn't overlap, thus obtaining 2 substrings. Notice also, that it's not optimal to choose "ef" since it can be split into two. Therefore, the optimal way is to choose ["e","f","ccc"] which gives us 3 substrings. No other solution of the same number of substrings exist
.
Example 2:
  Input: s = "abbaccd"
  Output: ["d","bb","cc"]
  Explanation: Notice that while the set of substrings ["d","abba","cc"] also has length 3, it's considered incorrect since it has larger total length.
  

Constraints:
  1 <= s.length <= 10^5
  s contains only lowercase English letters.

*/

// Time O(N)
// Space O(N)
const maxNumOfSubstrings = s => {
  let left = Array(26).fill(Number.MAX_VALUE);
  let right = Array(26).fill(-Number.MAX_VALUE);
  let n = s.length;

  for (let i = 0; i < n; i++) {
    let code = s[i].charCodeAt(0) - 'a'.charCodeAt(0);

    left[code] = Math.min(left[code], i);
    right[code] = Math.max(right[code], i);
  }

  let r = Number.MAX_VALUE;
  let res = [];

  for (let i = 0; i < n; i++) {
    let code = s[i].charCodeAt(0) - 'a'.charCodeAt(0);

    if (left[code] == i) {
      let newRight = checkSubstr(i);

      if (newRight != -1) {
        if (i > r || res.length) {
          res.push('');
        }
        r = newRight;
        res.push(s.substr(i, r - i + 1));
      }
    }
  }

  return res;

  // check overlap and return max right index
  // if found overlap return -1
  function checkSubstr(i) {
    let r = right[s[i].charCodeAt(0) - 'a'.charCodeAt(0)];

    for (let j = i; j <= r; j++) {
      let code = s[j].charCodeAt(0) - 'a'.charCodeAt(0);
      if (left[code] < i) {
        return -1;
      }
      r = Math.max(r, r[code]);
    }
  }
};
