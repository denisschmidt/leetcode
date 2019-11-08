/*
Given a string S and a string T, find the minimum window in S which will contain all the characters in T
in complexity O(n).

Example:
  Input: S = "ADOBECODEBANC", T = "ABC"
  Output: "BANC"

Note:
  If there is no such window in S that covers all characters in T, return the empty string "".
  If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
 */

// =============================================================================================================

/*
  For most substring problem,
  we are given a string and need to find a substring of it which satisfy some restrictions.

  A general way is to use a hashmap assisted with two pointers.

 ===============================================================================================================

 Нужно упомянуть одну вещь: когда мы просим найти максимальную подстроку,
 Мы должны обновить максимум после внутреннего цикла while, чтобы гарантировать, что подстрока верна.

 С другой стороны, когда нас просят найти минимальную подстроку
 Мы должны обновить минимум внутри внутреннего цикла while.
 */

// Time O(N)
// Space O(N)
const minWindow = (s, t) => {
  const map = {};

  for (let x of t) {
    map[x] = ~~map[x] + 1;
  }

  let start = 0;
  let end = 0;
  let minLength = Number.MAX_VALUE;
  let minStartIndex = 0;
  let cnt = t.length;

  while (end < s.length) {
    if (map[s[end]] > 0) {
      cnt--;
    }
    map[s[end]]--; // уменьшаем счетчик для символа и передвигаем указатель конца

    end++;

    while (cnt === 0) {
      // update minLength here if finding minimum !!!!
      if (minLength > end - start) {
        minLength = end - start;
        minStartIndex = start;
      }
      map[s[start]]++;

      if (map[s[start]] > 0) {
        cnt++;
      }

      start++; // minimize the window by advancing the start pointer
    }
    // update maxLength here if finding maximum !!!
  }

  return minLength === Number.MAX_VALUE ? '' : s.substr(minStartIndex, minLength);
};
