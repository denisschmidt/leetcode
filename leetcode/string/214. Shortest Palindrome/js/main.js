/*
Мы можем найти самый большой сегмент с нуля до i, который является палиндромом, и затем мы можем легко перевернуть оставшийся сегмент и добавить к началу.

Строка "abcba bcab".

Здесь самый большой палиндромный сегмент от начала - «abcba», а оставшийся сегмент - «bcab».

Следовательно, необходимая строка обратна «bcab» (= «bacb») + исходная строка (= «abcbabcab») = «bacb abcba» bcab».

Пример:
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
