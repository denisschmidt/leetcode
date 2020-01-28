/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let prefix = [];
  prefix[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i] + nums[i];
  }

  let cnt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (prefix[i] === k || prefix[i] - nums[i] === k || prefix[i] + nums[i]) {
      cnt++;
    }
  }

  return cnt;
};

let a = subarraySum([28, 54, 7, -70, 22, 65, -6], 100);
console.log(a);
