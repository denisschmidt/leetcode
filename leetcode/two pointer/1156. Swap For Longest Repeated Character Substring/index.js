/*

Given a string text, we are allowed to swap two of the characters in the string. 
Find the length of the longest substring with repeated characters.


Example 1:
  Input: text = "ababa"
  Output: 3
  Explanation: We can swap the first 'b' with the last 'a', or the last 'b' with the first 'a'. Then, the longest repeated character substring is "aaa", which its length is 3.

Example 2:
  Input: text = "aaabaaa"
  Output: 6
  Explanation: Swap 'b' with the last 'a' (or the first 'a'), and we get longest repeated character substring "aaaaaa", which its length is 6.

Example 3:
  Input: text = "aaabbaaa"
  Output: 4

Example 4:
  Input: text = "aaaaa"
  Output: 5
  Explanation: No need to swap, longest repeated character substring is "aaaaa", length is 5.

Example 5:
  Input: text = "abcdef"
  Output: 1
 

Constraints:
  1 <= text.length <= 20000
  text consist of lowercase English characters only.

*/

/*

  Нужно найти самую длинную подстроку с повторяющимся символом, которая может содержать не более одного другого символа.

  Результатом будет: min(самой длинной подстроки и общее количество вхождения символа)
  
  Поскольку у нас может не быть лишних символов, чтобы сделать своп.

*/

// Time O(N)
// Space O(N)
const maxRepOpt1 = text => {
  let freq = {};

  for (let t of text) {
    map[t] = 0;
    freq[t] = ~~freq[t] + 1;
  }

  let start = 0;
  let end = 0;
  let maxCnt = 0;
  let maxLen = 0;
  let maxChar = '#';

  while (end < text.length) {
    map[text[end]]++;

    if (map[text[end]] > maxCnt) {
      maxCnt = map[text[end]];
      maxChar = text[end];
    }

    while (end - start + 1 - maxCnt > 1) {
      map[text[start++]]--;
    }

    // end - start + 1 длина окна не может быть больше чем максимальное вхождение символа
    maxCnt = Math.max(maxLen, Math.min(end - start + 1, freq[maxChar] || 0));

    end++;
  }

  return maxLen;
};
