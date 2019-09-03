/*
Given a list of non-negative numbers and a target integer k, write a function to check if the array has a continuous subarray
of size at least 2 that sums up to a multiple of k, that is, sums up to n*k where n is also an integer.

Example 1:

  Input: [23, 2, 4, 6, 7],  k=6
  Output: True
  Explanation: Because [2, 4] is a continuous subarray of size 2 and sums up to 6.

Example 2:
  Input: [23, 2, 6, 4, 7],  k=6
  Output: True
  Explanation: Because [23, 2, 6, 4, 7] is an continuous subarray of size 5 and sums up to 42.
 

Note:

The length of the array won't exceed 10,000.
You may assume the sum of all the numbers is in the range of a signed 32-bit integer.

 */

// Another thing is very important =>
// if sum[0, i] % K == sum[0, j] % K, => sum[i + 1, j] is divisible by by K. !!!!!!!!!!!!
// So for current index j, we need to find out how many index i (i < j) exit that has the same mod of K.

// Time O(N)
// Space O(N)
const checkSubarraySum = function(nums, k) {
  if (nums.length <= 1) return false;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0 && nums[i + 1] === 0) return true;
  }

  if (k === 0) return false;

  const map = new Map();
  let sum = 0;

  // почему тут -1 ?
  // В случае nums = [1, 5] k = 6, при i = 1, sum % k = 0, поэтому нам нужен ключ '0' в map
  // и он должен соответствовать непрерывному условию, i - map.get (sum) > 1, поэтому мы даем произвольное значение -1.
  map.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let mod = sum % k;

    if (!map.has(mod)) {
      map.set(mod, i);
    } else {
      let pre = map.get(mod);
      if (i - pre >= 2) return true;
    }
  }

  return false;
};
