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
