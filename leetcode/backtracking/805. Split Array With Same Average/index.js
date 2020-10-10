/*
In a given integer array A, we must move every element of A to either list B or list C. (B and C initially start empty.)

Return true if and only if after such a move, it is possible that the average value of B is equal to the average value of C, and B and C are both non-empty.

Example :

  Input:
    [1,2,3,4,5,6,7,8]
  Output: true

  Explanation: We can split the array into [1,4,5,8] and [2,3,6,7], and both of them have the average of 4.5.

Note:
  The length of A will be in the range [1, 30].
  A[i] will be in the range of [0, 10000].
 */

/*
First, this problem is NP, and the worst case runtime is exponential.
But the expected runtime for random input could be very fast.
If the array of size n can be splitted into group A and B with same mean, assuming A is the smaller group, then

totalSum/n = Asum/k = Bsum/(n-k), where k = A.size() and 1 <= k <= n/2;
Asum = totalSum*k/n, which is an integer. So we have totalSum*k%n == 0;

In general, not many k are valid.


 */

// =====================================================================================================================
// Backtracking

const backtracking = (A, sum, partsize, partsum, start) => {
  if (partsize && partsum !== A.length) {
    let v1 = partsum * (A.length - partsize);
    let v2 = (sum - partsum) * partsize;

    if (v1 === v2) {
      return true;
    } else if (v1 > v2) {
      return false;
    }
  }

  for (let i = start; i < A.length; i++) {
    if (i !== start && A[i] === A[i - 1]) continue; //skip equal values
    if (backtracking(A, sum, partsize + 1, partsum + A[i], i + 1)) {
      return true;
    }
  }
  return false;
};

const splitArraySameAverage = function (A) {
  const sum = A.reduce((acc, item) => acc + item, 0);
  A.sort((a, b) => a - b);
  return backtracking(A, sum, 0, 0, 0);
};

const res = splitArraySameAverage([1, 2, 3, 4, 5, 6, 7, 8]);
console.log('---', res);

// =====================================================================================================================
// DFS

const dfs = (start, n, sum, A) => {
  if (n === 0) {
    return sum === 0;
  }
  for (let i = start; i < A.length && sum >= A[i] * n; i++) {
    if (dfs(i + 1, n - 1, sum - A[i], A)) {
      return true;
    }
  }
  return false;
};

// The only thing we must know is that the average of each partition is the average of the entire array.
const splitArraySameAverage2 = function (A) {
  const sum = A.reduce((acc, item) => acc + item, 0);
  A.sort((a, b) => a - b);

  for (let i = 1; i < A.length / 2; i++) {
    if ((i * sum) % A.length === 0 && dfs(0, i, (i * sum) / A.length, A)) {
      return true;
    }
  }
  return false;
};

const res2 = splitArraySameAverage2([1, 2, 3, 4, 5, 6, 7, 8]);
console.log('---', res);

// =====================================================================================================================

// Backtracking

const combinationSum = (nums, start, k, sum) => {
  if (k === 0) return sum === 0;
  for (let i = start; i <= nums.length - k; ++i) {
    if (nums[i] <= sum && combinationSum(nums, i + 1, k - 1, sum - nums[i])) return true;
  }
  return false;
};

/*
  Для таких k задача преобразуется в «Найти k sum = Asum, т.е. totalSum * k / n, из массива размера n».
  Эта подзадача аналогична сумме комбинации LC39, которая может быть решена путем возврата.
 */
const splitArraySameAverage3 = function (A) {
  const totalSum = A.reduce((acc, val) => acc + val, 0);
  const n = A.length;
  const m = n / 2;

  A.sort((a, b) => a - b);

  for (let i = 1; i <= m; ++i) {
    if ((totalSum * i) % n === 0 && combinationSum(A, 0, i, (totalSum * i) / n)) return true;
  }
  return false;
};

const res3 = splitArraySameAverage3([1, 2, 3, 4, 5, 6, 7, 8]);
console.log('---', res3);
