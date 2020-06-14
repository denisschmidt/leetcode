/*

Given a string s and an integer k. You should construct k non-empty palindrome strings using all the characters in s.

Return True if you can use all the characters in s to construct k palindrome strings or False otherwise.

Example 1:
  Input: s = "annabelle", k = 2
  Output: true
  Explanation: You can construct two palindromes using all characters in s.
    Some possible constructions "anna" + "elble", "anbna" + "elle", "anellena" + "b"

Example 2:
  Input: s = "leetcode", k = 3
  Output: false
  Explanation: It is impossible to construct 3 palindromes using all the characters of s.

Example 3:
  Input: s = "true", k = 4
  Output: true
  Explanation: The only possible solution is to put each character in a separate string.

Example 4:
  Input: s = "yzyzyzyzyzyzyzy", k = 2
  Output: true
  Explanation: Simply you can put all z's in one string and all y's in the other string. Both strings will be palindrome.

Example 5:
  Input: s = "cr", k = 7
  Output: false
  Explanation: We don't have enough characters in s to construct 7 palindromes.
 
Constraints:
  1 <= s.length <= 10^5
  All characters in s are lower-case English letters.
  1 <= k <= 10^5

*/

/*

  eg2 -
  aabbc, k=1 | aacbb
  aabbc, k=2 | aca, bb
  aabbc, k=3 | a,a, bcb
  aabbc, k=4 | a, a, c ,bb
  aabbc, k=5 | a, a, c, b, b

  eg3 -
  aabc, K=1 | aabc
  aabc, K=2 | aba, c
  aabc, K=3 | aa, b, c
  aabc, K=4 | a, a, b, c

  Если кол-во нечетных символов oddCnt > K - тогда невозможно построить из строки K полидромов
  Максимальное чисто нечетных вхождений должно быть ровно K тогда можно будет построить ровно K палидромов

*/

// Time O(N)
// Space O(N)
const canConstruct = (s, k) => {
  let str = s.split('').sort((a, b) => a.localeCompare(b));
  let n = str.length;

  // Если у нас есть один символ в каждом палиндроме у нас будет максимум s.length палиндромов
  // Поэтому нам нужно чтобы k <= s.length
  if (n < k) return false;

  let map = {};

  for (let x of str) map[x] = ~~map[x] + 1;

  let oddCnt = 0;
  for (let k of Object.keys(map)) {
    if (map[k] % 2 != 0) {
      oddCnt++;
    }
  }

  // Для любой строки с oddCnt <= k мы всегда можем сформировать строку k-палиндрома
  return oddCnt <= k;
};
