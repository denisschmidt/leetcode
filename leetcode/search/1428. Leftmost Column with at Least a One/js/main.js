// Time O(N * LogM)
// Space O(1)
const leftMostColumnWithOne = binaryMatrix => {
  let [rows, cols] = binaryMatrix.dimensions();
  let INF = Number.MAX_VALUE;
  let res = INF;

  for (let i = 0; i < rows; i++) {
    let index = search(i, cols);

    if (index != -1) {
      res = Math.min(res, index);
    }
  }

  return res == INF ? -1 : res;

  function search(row, cols) {
    let lo = 0;
    let hi = cols - 1;

    while (lo < hi) {
      let mid = lo + Math.floor((hi - lo) / 2);

      if (binaryMatrix.get(row, mid) == 0) {
        lo = mid + 1;
      } else {
        hi = mid;
        ans = hi;
      }
    }

    return binaryMatrix.get(row, lo) == 1 ? lo : -1;
  }
};
