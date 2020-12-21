// Time O(N)
// Space O(N)
const dailyTemperatures = T => {
  let st = [];
  let n = T.length;
  let res = [];

  for (let i = 0; i < n; i++) {
    while (st.length && T[st[st.length - 1]] < T[i]) {
      let j = st.pop();
      res[j] = i - j;
    }

    st.push(i);
  }

  while (st.length) {
    res[st.pop()] = 0;
  }

  return res;
};
