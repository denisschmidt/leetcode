/*

Given a string s, return the last substring of s in lexicographical order.

Example 1:
  Input: "abab"
  Output: "bab"
  Explanation: The substrings are ["a", "ab", "aba", "abab", "b", "ba", "bab"]. The lexicographically maximum substring is "bab".

Example 2:
  Input: "leetcode"
  Output: "tcode"
 

Note:
  1 <= s.length <= 4 * 10^5
  s contains only lowercase English letters.

*/

// Time O(N) worst case O(N^2)
// Space O(N)
const lastSubstring = s => {
  let n = s.length;
  let stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && s[stack[stack.length - 1]] < s[i]) {
      stack.pop();
    }

    if (!stack.length || s[i] >= s[stack[stack.length - 1]]) {
      stack.push(i);
    }
  }

  let maxIndex = 0;

  // Из всех индексов получаем тот индекс, с которого начинается самая большая подстрока
  for (let i = 1; i < stack.length; i++) {
    let p1 = stack[maxIndex] + 1;
    let p2 = stack[i] + 1;

    while (p2 < n) {
      if (s[p1] > s[p2]) {
        // Оставляем все как есть т.к подстрока начинающаяся с stack[maxIndex] индекса пока самая большая
        break;
      } else if (s[p1] < s[p2]) {
        // Обновляем maxIndex, если построка начинающаяся с stack[i] индекса больше чем с stack[maxIndex]
        maxIndex = i;
        break;
      }
      p1++;
      p2++;
    }

    if (p2 == n) {
      return s.substring(stack[maxIndex]);
    }
  }

  return s.substring(stack[maxIndex]);
};
