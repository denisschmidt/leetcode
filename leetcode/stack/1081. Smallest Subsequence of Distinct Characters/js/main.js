// Increasing stack
// Time O(N)
// Space O(2*K + N) K - 26
/**
 * @param {string} s
 * @return {string}
 */
const smallestSubsequence = s => {
  let lastIndex = new Map();
  let visited = new Set();

  for (let i = 0; i < s.length; i++) {
    lastIndex.set(s[i], i);
  }

  let st = [];

  for (let i = 0; i < s.length; i++) {
    if (visited.has(s[i])) continue;

    // Если текущий символ, меньше, чем тот который в стеке
    // И символ который в стеке еще будет встречаться дальше во входной строке
    // Иначе мы не должны удалять его из стека, так как добавить этот символ будет больше невозможно
    while (st.length && st[st.length - 1] > s[i] && lastIndex.get(st[st.length - 1]) > i) {
      let x = st.pop();
      visited.delete(x);
    }

    visited.add(s[i]);
    st.push(s[i]);
  }

  return st.join('');
};
