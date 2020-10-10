/*
A sorted list A contains 1, plus some number of primes.  Then, for every p < q in the list, we consider the fraction p/q.

What is the K-th smallest fraction considered?  Return your answer as an array of ints, where answer[0] = p and answer[1] = q.

Examples: 
  Input: A = [1, 2, 3, 5], K = 3
  Output: [2, 5]
  Explanation:
    The fractions to be considered in sorted order are:
    1/5, 1/3, 2/5, 1/2, 3/5, 2/3.
    The third fraction is 2/5.

  Input: A = [1, 7], K = 1
  Output: [1, 7]
 
Note:
  A will have length between 2 and 2000.
  Each A[i] will be between 1 and 30000.
  K will be between 1 and A.length * (A.length - 1) / 2.

 */

// Time O(NLogW)
// Space O(1)
const kthSmallestPrimeFraction = (A, K) => {
  let start = 0;
  let end = 1;
  let p = 0;
  let q = 0;
  let n = A.length;

  while (start < end) {
    const mid = (end + start) / 2;
    let maxRatio = -1;
    let currRatio;
    let count = 0;

    let j = 1;
    // получаем кол-во дробей меньше mid
    for (let i = 0; i < n - 1; i++) {
      while (j < n && A[i] > A[j] * mid) j++;

      if (j === n) break;
      count += n - j;
      currRatio = A[i] / A[j];

      // находим макс значение дроби
      if (currRatio > maxRatio) {
        maxRatio = currRatio;
        p = A[i];
        q = A[j];
      }
    }

    if (count === K) return [p, q];
    else if (count > K) end = mid;
    else start = mid;
  }

  return [p, q];
};
