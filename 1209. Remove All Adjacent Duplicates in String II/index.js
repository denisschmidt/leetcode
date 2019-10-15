/*
Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made.

It is guaranteed that the answer is unique.

Example 1:
  Input: s = "abcd", k = 2
  Output: "abcd"
  Explanation: There's nothing to delete.

Example 2:
  Input: s = "deeedbbcccbdaa", k = 3
  Output: "aa"
  Explanation:
    First delete "eee" and "ccc", get "ddbbbdaa"
    Then delete "bbb", get "dddaa"
    Finally delete "ddd", get "aa"

Example 3:
  Input: s = "pbbcggttciiippooaais", k = 2
  Output: "ps"

Constraints:
  1 <= s.length <= 10^5
  2 <= k <= 10^4
  s only contains lower case English letters.


 "deeedbbcccbdaaff"

В один стек мы записываем кол-во повторений
В другой стек записываем только те итемы которые не со держат дубли

 */

// Two Stack
// Time O(N)
// Space O(N)
const removeDuplicates = function(str, k) {
  if (!k) return str;

  const n = str.length;
  const stack = [];
  const count = [];
  let i = 0;

  for (let j = 0; j < n; j++) stack.push(str[j]);

  for (let j = 0; j < n; j++, i++) {
    stack[i] = stack[j];

    if (i > 0 && stack[i - 1] === stack[j]) {
      count[i] = count[i - 1] + 1;
    } else {
      count[i] = 1;
    }

    if (count[i] === k) i -= k;
  }

  const ans = stack.slice(0, i).join('');

  console.log(ans);

  return ans;
};

removeDuplicates('deeedbbcccbdaaff', 3);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N ^ 2)
// Space O(1)
const removeDuplicates2 = function(str, k) {
  if (k === 0) return str;

  while (true) {
    let j = 1;
    let count = 1;
    let contin = false;

    while (j <= str.length) {
      if (str[j - 1] !== str[j]) {
        if (count >= k) {
          str = str.substring(0, j - k) + str.substring(j);

          j = j - k;
          contin = true;
        }
        count = 1;
      } else {
        count++;
      }
      j++;
    }

    if (!contin) break;
  }

  return str;
};
