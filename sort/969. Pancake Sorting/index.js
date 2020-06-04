/*

Given an array A, we can perform a pancake flip: We choose some positive integer k <= A.length, then reverse the order of the first k elements of A. 

We want to perform zero or more pancake flips (doing them one after another in succession) to sort the array A.

Return the k-values corresponding to a sequence of pancake flips that sort A.  

Any valid answer that sorts the array within 10 * A.length flips will be judged as correct.

Example 1:
  Input: [3,2,4,1]
  Output: [4,2,4,3]
  Explanation: 
  We perform 4 pancake flips, with k values 4, 2, 4, and 3.
  Starting state: A = [3, 2, 4, 1]
  After 1st flip (k=4): A = [1, 4, 2, 3]
  After 2nd flip (k=2): A = [4, 1, 2, 3]
  After 3rd flip (k=4): A = [3, 2, 1, 4]
  After 4th flip (k=3): A = [1, 2, 3, 4], which is sorted. 


Example 2:
  Input: [1,2,3]
  Output: []
  Explanation: The input is already sorted, so there is no need to flip anything.
  Note that other answers, such as [3, 3], would also be accepted.


Note:
  1 <= A.length <= 100
  A[i] is a permutation of [1, 2, ..., A.length]

*/

// Находим 1 самое большое значение в массиве
// Устанавливаем его в правильную позицию
// И уменьшаем поиск в массиве до N--

// Time O(N^2)
// Space O(N)
const pancakeSort = nums => {
  let n = nums.length;
  let ans = [];

  while (n > 0) {
    let max = -Number.MAX_VALUE;
    let maxIndex = -1;

    for (let i = 0; i < n; i++) {
      if (max < nums[i]) {
        max = nums[i];
        maxIndex = i;
      }
    }

    reverse(nums, maxIndex);
    reverse(nums, n - 1);

    ans.push(maxIndex + 1);
    ans.push(n);

    n--;

    if (isValid(nums)) {
      return ans;
    }
  }

  return ans;

  function reverse(nums, max) {
    for (let i = 0; i <= Math.floor(max / 2); i++) {
      swap(nums, i, max - i);
    }
    return nums;
  }

  function swap(nums, i, j) {
    return ([nums[i], nums[j]] = [nums[j], nums[i]]);
  }

  function isValid(nums) {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i - 1] > nums[i]) return false;
    }
    return true;
  }
};
