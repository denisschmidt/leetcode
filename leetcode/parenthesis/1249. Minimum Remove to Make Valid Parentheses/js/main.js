// Time O(N)
// Space O(N)
/**
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = s => {
  let st = [];
  let removed = new Set();

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      st.push(i);
    } else if (s[i] == ')') {
      if (st.length == 0) {
        removed.add(i);
      } else {
        st.pop();
      }
    }
  }

  while (st.length) {
    removed.add(st.pop());
  }

  let res = '';

  for (let i = 0; i < s.length; i++) {
    if (!removed.has(i)) {
      res += s[i];
    }
  }

  return res;
};
