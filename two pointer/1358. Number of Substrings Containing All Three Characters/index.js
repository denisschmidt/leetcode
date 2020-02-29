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
  let start = 0;
  let map = { a: 0, b: 0, c: 0 };
  let cnt = 0;
  let end = 0;
  let ans = 0;

  while (end < s.length) {
    map[s[end++]]++;

    while (start < s.length && map['a'] >= 1 && map['b'] >= 1 && map['c'] >= 1) {
      map[s[start++]]--;
      cnt++;
    }

    ans += cnt;
  }

  return ans;
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
