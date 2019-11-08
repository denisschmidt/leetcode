/*
Given a sorted array A of unique numbers, find the K-th missing number starting from the leftmost number of the array.

Example 1:
  Input: A = [4,7,9,10], K = 1
  Output: 5
  Explanation:  The first missing number is 5.

Example 2:
  Input: A = [4,7,9,10], K = 3
  Output: 8
  Explanation:  The missing numbers are [5,6,8,...], hence the third missing number is 8.

Example 3:
  Input: A = [1,2,4], K = 3
  Output: 6
  Explanation: The missing numbers are [3,5,6,7,...], hence the third missing number is 6.
 

Note:

1 <= A.length <= 50000
1 <= A[i] <= 1e7
1 <= K <= 1e8

 */

// Time O(LogN)
// Space O(1)
const missingElement = (nums, k) => {
  const n = nums.length;
  const missingNumber = missing(n - 1, nums);

  if (k > missingNumber) {
    return nums[n - 1] + k - missingNumber;
  }

  let l = 0;
  let r = n - 1;

  while (l !== r) {
    let mid = l + Math.floor((r - l) / 2);

    if (missing(mid, nums) < k) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return nums[l - 1] + k - missing(l - 1, nums);

  // возвращает количество пропущенных чисел до элемента массива с индексом idx.
  function missing(idx, nums) {
    return nums[idx] - nums[0] - idx;
  }
};

// Time O(N)
// Space O(1)
const missingElement2 = function(nums, k) {
  const set = new Set(nums);
  for (let i = nums[0]; i < nums[nums.length - 1]; i++) {
    if (!set.has(i)) k--;
    if (k === 0) return i;
  }
  return nums[nums.length - 1] + k;
};
