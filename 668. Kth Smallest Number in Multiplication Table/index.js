/*
Nearly every one have used the Multiplication Table. 
But could you find out the k-th smallest number quickly from the multiplication table?

Given the height m and the length n of a m * n Multiplication Table, and a positive integer k, 
you need to return the k-th smallest number in this table.

Example 1:
  Input: m = 3, n = 3, k = 5
  Output: 
  Explanation: 
    The Multiplication Table:
    1	2	3
    2	4	6
    3	6	9
  The 5-th smallest number is 3 (1, 2, 2, 3, 3).
  
Example 2:
  Input: m = 2, n = 3, k = 6
  Output: 
  Explanation:
    The Multiplication Table:
    1	2	3
    2	4	6

  The 6-th smallest number is 6 (1, 2, 2, 3, 4, 6).

Note:
  The m and n will be in the range [1, 30000].
  The k will be in the range [1, m * n]

 */

// Time O(M * Log(M * N))
// Наш бинарный поиск делит интервал на [lo, hi] половину на каждом шаге это будет Log(M * N)
// Так же на каждом шаге мы вызываем helper, что требует O(M) времени
// Space O(1)
const findKthNumber = (m, n, k) => {
  let lo = 1;
  let hi = m * n;

  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo) / 2);

    let cnt = helper(mid);

    if (cnt < k) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  return lo;

  function helper(mid) {
    let cnt = 0;
    let j = n - 1;
    for (let i = 0; i < m; i++) {
      while (j >= 0 && (i + 1) * (j + 1) > mid) j--;
      cnt += j + 1;
    }
    return cnt;
  }
};

const r = findKthNumber(3, 3, 1);
console.log(r);
