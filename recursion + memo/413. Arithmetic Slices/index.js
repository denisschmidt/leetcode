/*

A sequence of number is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

For example, these are arithmetic sequence:

1, 3, 5, 7, 9
7, 7, 7, 7
3, -1, -5, -9

The following sequence is not arithmetic. 1, 1, 2, 5, 7

A zero-indexed array A consisting of N numbers is given. 

A slice of that array is any pair of integers (P, Q) such that 0 <= P < Q < N.

A slice (P, Q) of array A is called arithmetic if the sequence:
A[P], A[p + 1], ..., A[Q - 1], A[Q] is arithmetic. 
In particular, this means that P + 1 < Q.

The function should return the number of arithmetic slices in the array A.


Example: A = [1, 2, 3, 4]
return: 3, for 3 arithmetic slices in A: [1, 2, 3], [2, 3, 4] and [1, 2, 3, 4] itself.

*/

// Time O(N)
// Space O(N)
const numberOfArithmeticSlices = A => {
  let n = A.length;
  let ans = 0;

  helper(0, 0);

  return ans;

  function helper(index) {
    if (index >= n - 2) {
      return 0;
    }

    if (A[index] - A[index + 1] == A[index + 1] - A[index + 2]) {
      let cnt = 1 + helper(index + 1);
      ans += cnt;
      return cnt;
    } else {
      helper(index + 1);
      return 0;
    }
  }
};

// https://leetcode.com/problems/arithmetic-slices/discuss/90076/Java-verbose-O(N)-time-O(1)-space-on-DPrecursion-inspired-by-Palindromic-Substrings
// Time O(N^2)
// Space O(1)
const numberOfArithmeticSlices_II = A => {
  let res = 0;
  let n = A.length;

  if (n < 3) return 0;

  let start = 0;

  while (start < n) {
    // посчитали длину среза массива которые удовлетворяет условию
    let end = extendRun(start);
    let len = end - start + 1;

    start = end;

    res += countSlices(len);
  }

  return res;

  function extendRun(start) {
    if (start + 2 >= n) {
      return start + 1;
    }
    let diff = A[start + 1] - A[start];
    let curr = start + 1;

    while (curr + 1 < n && A[curr + 1] - A[curr] == diff) {
      curr++;
    }
    return curr;
  }

  // Для примера 1,1,2,3,4,5,6,5,4,3 мы находим в [1] самый длинный срез 1,2,3,4,5,6 длины 6
  // Мы можем вычислить количество фрагментов в нем с помощью метода countSlices
  // Затем мы перезапускаем расширение с позиции 6 и находим 6,5,4,3. И снова подсчитываем кол-во
  function countSlices(len) {
    if (len < 3) return 0;

    // используем формулу вместо прямого подсчета
    let N = len - (3 - 1);
    return (N * (N + 1)) / 2;
  }
};

// Time O(N^2)
// Space O(1)
const numberOfArithmeticSlices_III = A => {
  let n = A.length;
  let res = 0;

  for (let i = 0; i < n; i++) {
    let j = i + 1;
    let diff = A[i] - A[j];
    let cnt = 0;

    while (j < n - 1 && A[j] - A[j + 1] == diff) {
      j++;
      cnt++;
    }

    res += cnt;
  }

  return res;
};
