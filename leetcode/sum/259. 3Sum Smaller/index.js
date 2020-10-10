/*
Given an array of n integers nums and a target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.

Example:
  Input: nums = [-2,0,1,3], and target = 2
  Output: 2
  Explanation:
    Because there are two triplets which sums are less than 2:
   [-2,0,1]
   [-2,0,3]

Follow up: Could you solve it in O(n2) runtime?
 */

// Time O(N^2)
var threeSumSmaller = function (nums, target) {
  const n = nums.length;
  let count = 0;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    if (nums[i] + nums[i + 1] + nums[i + 2] > target) break;

    let low = i + 1;
    let high = n - 1;

    // Находим все перестановки связанные с nums[i]
    while (low < high) {
      let sum = nums[i] + nums[low] + nums[high];

      if (sum < target) {
        // сколько элементов аналогично меньше target в промежутке от low до high ? это == high - low
        count += high - low;
        low++;
      } else {
        high--;
      }
    }
  }
  return count;
};
