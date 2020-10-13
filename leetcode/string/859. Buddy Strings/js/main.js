// Time O(N)
// Space O(N)

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
  if (A == B) {
    let map = {};

    for (let i = 0; i < A.length; i++) {
      map[A[i]] = ~~map[A[i]] + 1;
      if (map[A[i]] > 1) {
        return true;
      }
    }
    return false;
  }

  if (A.length != B.length) {
    return false;
  }

  let st = [];

  for (let i = 0; i < A.length; i++) {
    if (A[i] != B[i]) {
      st.push(i);
    }
  }

  if (st.length > 2) {
    return false;
  }

  let [i, j] = st;

  return A[i] == B[j] && A[j] == B[i];
};
