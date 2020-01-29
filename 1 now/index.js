var longestArithSeqLength = function(A) {
  let maxLen = 1;

  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      let diff = A[i] - A[j];
      cnt = 1;

      let pre = i;
      let k = j;

      while (k < A.length) {
        if (A[pre] - A[k] === diff) {
          pre = k;
          cnt++;
        }
        k++;
      }

      maxLen = Math.max(maxLen, cnt);
    }
  }
  return maxLen;
};

let a = longestArithSeqLength([20, 1, 15, 3, 10, 5, 8]);
console.log('---', a);
