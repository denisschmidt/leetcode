/*
You have an array of logs.  Each log is a space delimited string of words.

For each log, the first word in each log is an alphanumeric identifier.

Then, either:
  Each word after the identifier will consist only of lowercase letters, or;
  Each word after the identifier will consist only of digits.

We will call these two varieties of logs letter-logs and digit-logs.

It is guaranteed that each log has at least one word after its identifier.

Reorder the logs so that all of the letter-logs come before any digit-log.

The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.

The digit-logs should be put in their original order.

Return the final order of the logs.

Example 1:

  Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
  Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]


Constraints:
  0 <= logs.length <= 100
  3 <= logs[i].length <= 100
  logs[i] is guaranteed to have an identifier, and a word after the identifier.

 */

// Time O(NLogN) где N - общее содержание журналов.
// Space O(N)

// JS использует алгоритм под названием Timsort,
// гибридный алгоритм сортировки, производный от сортировки слиянием и сортировки вставкой,
// разработанный для эффективной работы со многими видами реальных данных.

// Это пространство O (n).

var reorderLogFiles = function(logs) {
  const map = new Map();
  const numbers = [];
  const chars = [];

  for (let log of logs) {
    let x = log.split(' ');
    if (Number.isInteger(+x[1])) {
      numbers.push(log);
    } else {
      chars.push(log);
    }
  }

  return [...chars.sort(sortLogs), ...numbers];

  function sortLogs(a, b) {
    let x = a.slice(a.indexOf(' ') + 1);
    let y = b.slice(b.indexOf(' ') + 1);

    return x === y ? a.localeCompare(b) : x.localeCompare(y);
  }
};
