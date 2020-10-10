/*

You are given a string containing only 4 kinds of characters 'Q', 'W', 'E' and 'R'.

A string is said to be balanced if each of its characters appears n/4 times where n is the length of the string.

Return the minimum length of the substring that can be replaced with any other string of the same length to make the original string s balanced.

Return 0 if the string is already balanced.

Example 1:
  Input: s = "QWER"
  Output: 0
  Explanation: s is already balanced.

Example 2:
  Input: s = "QQWE"
  Output: 1
  Explanation: We need to replace a 'Q' to 'R', so that "RQWE" (or "QRWE") is balanced.

Example 3:
  Input: s = "QQQW"
  Output: 2
  Explanation: We can replace the first "QQ" to "ER". 

Example 4:
  Input: s = "QQQQ"
  Output: 3
  Explanation: We can replace the last 3 'Q' to make s = "QWER".
  

Constraints:
  1 <= s.length <= 10^5
  s.length is a multiple of 4
  s contains only 'Q', 'W', 'E' and 'R'.

*/

// Time O(N)
// Space O(1)
const balancedString = s => {
  let map = {};
  let n = s.length;
  let res = n;
  let i = 0;
  let k = n / 4;

  for (let j = 0; j < n; ++j) {
    map[s[j]] = ~~map[s[j]] + 1;
  }

  map['Q'] = map['Q'] || k;
  map['W'] = map['W'] || k;
  map['E'] = map['E'] || k;
  map['R'] = map['R'] || k;

  for (let j = 0; j < n; ++j) {
    --map[s[j]];

    while (i < n && map['Q'] <= k && map['W'] <= k && map['E'] <= k && map['R'] <= k) {
      res = Math.min(res, j - i + 1);
      map[s[i]]++;
      i++;
    }
  }

  return res;
};
