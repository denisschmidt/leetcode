/*

Given a string s consisting only of characters a, b and c.

Return the number of substrings containing at least one occurrence of all these characters a, b and c.

Example 1:
  Input: s = "abcabc"
  Output: 10
  Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 

Example 2:
  Input: s = "aaacb"
  Output: 3
  Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb". 

Example 3:
  Input: s = "abc"
  Output: 1
 

Constraints:
  3 <= s.length <= 5 x 10^4
  s only consists of a, b or c characters.

*/

// Time O(N)
// Space O(1)

const numberOfSubstrings = s => {
  let map = { a: 0, b: 0, c: 0 };
  let start = 0;
  let end = 0;
  let n = s.length;
  let cnt = 0;
  let res = 0;
  let freq = 0;

  while (end < n) {
    if (map[s[end]] == 0) {
      freq++;
    }

    map[s[end++]]++;

    while (freq == 3) {
      cnt++;
      if (map[s[start]] == 1) {
        freq--;
      }
      map[s[start++]]--;
    }

    // as a new count can contains prev counts
    res += cnt;
  }

  return res;
};

// Time O(N)
// Space O(1)
const numberOfSubstrings_II = s => {
  // находим кол-во подстрок больше 3 и кол-во подстрок больше 2
  // разница даст нам точное значение если кол-во равно 3
  return atMostK(s, 3) - atMostK(s, 2);

  function atMostK(s, k) {
    let ans = 0;
    let j = 0;
    let map = { a: 0, b: 0, c: 0 };

    for (let i = 0; i < s.length; i++) {
      k -= map[s[i]]++ === 0 ? 1 : 0;

      while (k < 0) {
        k += map[s[j++]]-- === 1 ? 1 : 0;
      }

      ans += i - j + 1;
    }

    return ans;
  }
};
