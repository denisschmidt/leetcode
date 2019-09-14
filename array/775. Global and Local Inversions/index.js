/*
We have some permutation A of [0, 1, ..., N - 1], where N is the length of A.

The number of (global) inversions is the number of i < j with 0 <= i < j < N and A[i] > A[j].

The number of local inversions is the number of i with 0 <= i < N and A[i] > A[i+1].

Return true if and only if the number of global inversions is equal to the number of local inversions.

Example 1:

  Input: A = [1,0,2]
  Output: true
  Explanation: There is 1 global inversion, and 1 local inversion.

Example 2:

  Input: A = [1,2,0]
  Output: false
  Explanation: There are 2 global inversions, and 1 local inversion.

Note:
  A will be a permutation of [0, 1, ..., A.length - 1].
  A will have length in range [1, 5000].
  The time limit for this problem has been reduced.
 */

// каждая локальная инверсия также является глобальной инверсией
// поэтому «локальные инверсии == глобальные инверсии» можно интерпретировать как «существуют только локальные инверсии»
// если есть только локальные инверсии, массив будет отсортирован после выполнения всех локальных инверсий
// если есть инверсии, которые не являются локальными, массив не будет отсортирован после выполнения всех локальных инверсий
var isIdealPermutation = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i] + 1) {
      [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]];
    } else if (nums[i - 1] !== i - 1) {
      return false;
    }
  }
  return true;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// [0,1,2], [0,2,1], [1,0,2] действительны, но [1,2,0], [2,0,1]. [2,1,0] являются недействительными
// Следовательно, arr [0] может быть только 0 или 1.
// А также, если arr [0] = 1, arr [1] должно быть 0. Если нет, arr = [1,2,0], где global = 2, local = 1.
var isIdealPermutation3 = function(A) {
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== i) {
      if (A[i] !== i + 1 || A[i + 1] !== i) return false;
      else i++;
    }
  }
  return true;
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N^2)
// Space O(1)
var isIdealPermutation2 = function(nums) {
  let gCount = 0;
  let lCount = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      lCount++;
    }
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i && nums[i] > nums[j]) gCount++;
    }
  }

  return lCount === gCount;
};
