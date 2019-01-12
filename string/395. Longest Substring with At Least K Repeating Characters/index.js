/*

Find the length of the longest substring T of a given string (consists of lowercase letters only)
such that every character in T appears no less than k times.

Example 1:

  Input:
    s = "aaabb", k = 3

  Output:
    3
The longest substring is "aaa", as 'a' is repeated 3 times.

Example 2:

  Input:
    s = "ababbc", k = 2
  Output:
    5
The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.


O(N) - solution

Why ?
  This is definitely an O(n) solution.
  In the while loop, either i or j will increase by 1 in each iteration, so it costs at most 2*n time.
  In total, it will cost 56 * n time, which is O(n).

Comments:
  Самая сложная часть применения техники с двумя указателями - это решить, когда сжимать левую сторону окна,
  то есть увеличивать i.
  Таким образом, чтобы применить технику с двумя указателями
  нам нужно наложить некоторое ограничение на подстроку в окне, то есть количество уникальных символов в окне.

  С этой целью мы можем применить технику с двумя указателями, но нам также нужен еще один внешний цикл
  для изучения всех возможных случаев, то есть количества уникальных символов в окне.

  Если мы избавимся от внешнего цикла (h = 1: 26), то мы понятия не имеем, сколько уникальных символов в окне.

  К счастью, максимальное количество уникальных символов ограничено 26,
  что означает, что O (N) сложность по времени имеет место.


 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const longestSubstring = function(s, k) {
  let map = {},
    maxLen = 0;
  for (let i = 1; i <= 26; i++) {
    let begin = 0,
      end = 0,
      uniqueChar = 0;
    for (let h = 0; h < 26; h++) {
      map[String.fromCharCode(h + 97)] = 0;
    }

    while (end < s.length) {
      let valid = true;
      if (map[s[end++]]++ === 0) {
        uniqueChar++;
      }
      while (uniqueChar > i) {
        if (map[s[begin++]]-- === 1) {
          uniqueChar--;
        }
      }
      for (let j = 0; j < 26; j++) {
        let code = String.fromCharCode(j + 97);
        if (map[code] > 0 && map[code] < k) {
          valid = false;
        }
      }
      if (valid) {
        maxLen = Math.max(maxLen, end - begin);
      }
    }
  }
  return maxLen;
};

// "ababacb"
// 3

const res = longestSubstring('aaabb', 3);
console.log('---', res);
