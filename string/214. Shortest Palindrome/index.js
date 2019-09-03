/*

214. Shortest Palindrome

Given a string s, you are allowed to convert it to a palindrome by adding characters in front of it.

Find and return the shortest palindrome you can find by performing this transformation.

Example 1:

  Input: "aacecaaa"
  Output: "aaacecaaa"

Example 2:

  Input: "abcd"
  Output: "dcbabcd"

 */

/*
Мы можем найти самый большой сегмент с нуля до i, который является палиндромом, и затем мы можем легко перевернуть оставшийся сегмент и добавить к началу.

Строка "abcbabcab".

Здесь самый большой палиндромный сегмент от начала - «abcba», а оставшийся сегмент - «bcab».

Следовательно, необходимая строка обратна «bcab» (= «bacb») + исходная строка (= «abcbabcab») = «bacb abcba» bcab».

Пример

s = dedcba -> abcded

dedcba

abcded - none
bcded - none
cded - none
ded - true

Возвращаем abc + ded + cba

abcd

dcba
cba
ba
a


 */
// Time O(N^2)
// Space O(N)
const shortestPalindrome = str => {
  let rev = '';
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  for (let i = 0; i < str.length; i++) {
    if (str.startsWith(rev.substring(i))) {
      return rev.substring(0, i) + str;
    }
  }

  return '';
};
