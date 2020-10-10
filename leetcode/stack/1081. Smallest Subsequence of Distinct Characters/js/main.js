// Increasing stack
// Time O(N)
// Space O(2*K + N) K - 26
/**
 * @param {string} text
 * @return {string}
 */
var smallestSubsequence = function (text) {
  let indexMap = {};
  for (let i = 0; i < text.length; i++) {
    let ch = text[i];
    indexMap[ch] = i;
  }

  let st = [];
  let map = {};

  for (let i = 0; i < text.length; i++) {
    if (map[text[i]] > 0) {
      continue;
    }

    // Если текущий символ, меньше, чем тот который в стеке
    // И символ который в стеке еще будет встречаться дальше во входной строке
    // Иначе мы не должны удалять его из стека, так как добавить этот символ будет больше невозможно
    while (st.length && last(st) > text[i] && indexMap[last(st)] > i) {
      let prevCh = st.pop();
      map[prevCh]--;
    }

    st.push(text[i]);
    map[text[i]] = ~~map[text[i]] + 1;
  }

  let res = '';

  while (st.length) {
    res = st.pop() + res;
  }

  return res;

  function last(x) {
    return x[x.length - 1];
  }
};
