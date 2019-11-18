/*
Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

Example:
  matrix = [
     [ 1,  5,  9],
     [10, 14, 17],
     [12, 13, 15]
  ],
  k = 8,

  return 13.

Note: You may assume k is always valid, 1 ≤ k ≤ n2.
 */

// Time O(NLog)
// Space O(1)
const kthSmallest = (matrix, k) => {
  let n = matrix.length;
  let m = matrix[0].length;

  // получим самое маленькое и максимально возможное число
  // затем мы уменьшаем пространство поиска в соответствии с двумя числами
  let lo = matrix[0][0];
  let hi = matrix[n - 1][m - 1];

  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo) / 2);

    let cnt = 0;
    let j = m - 1;
    // получаем кол-во значений которые меньше mid
    for (let i = 0; i < matrix.length; i++) {
      while (j >= 0 && matrix[i][j] > mid) j--;

      cnt += j + 1;
    }

    if (cnt < k) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
};

// Time O(N * M * NLogN);
// Space O(N)
const kthSmallest2 = (matrix, k) => {
  const results = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      results.push(matrix[i][j]);
    }
  }

  results.sort((a, b) => a - b);
  return results[k - 1];
};

const { PriorityQueue } = require('../../../algorithms/priorityQueue');

// Time O(min(K,N)+K∗logN)
// Space O(N)
// Min Heap
const kthSmallest2 = (matrix, k) => {
  // create a min heap that stores { val, i, j }
  const pq = new PriorityQueue({ comparator: (a, b) => a.val - b.val });

  // put matrix[0][0] to the min heap
  pq.offer({ val: matrix[0][0], i: 0, j: 0 });

  while (--k > 0) {
    const { i, j } = pq.poll();

    // put matrix[i + 1][j] to the min heap if it hasn't been visited
    if (i < matrix.length - 1 && matrix[i + 1][j] !== null) {
      pq.offer({ val: matrix[i + 1][j], i: i + 1, j });
      matrix[i + 1][j] = null;
    }

    // put matrix[i][j + 1] to the min heap if it hasn't been visited
    if (j < matrix[0].length - 1 && matrix[i][j + 1] !== null) {
      pq.offer({ val: matrix[i][j + 1], i, j: j + 1 });
      matrix[i][j + 1] = null;
    }
  }

  return pq.peek().val;
};
