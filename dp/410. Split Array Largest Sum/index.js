/*

Given an array which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays. 
Write an algorithm to minimize the largest sum among these m subarrays.

Examples:
  Input: nums = [7,2,5,10,8] m = 2
  Output: 18

Explanation:
  There are four ways to split nums into two subarrays.
  The best way is to split it into [7,2,5] and [10,8],
  where the largest sum among the two subarrays is only 18.

Note:
  If n is the length of array, assume the following constraints are satisfied:
  1 ≤ n ≤ 1000
  1 ≤ m ≤ min(50, n)

*/

/*

Для каждого элемента в массиве мы можем добавить его к предыдущему подмассиву 

или запустить новый подмассив, начиная с этого элемента (если число подмассивов не превышает m). 

Сумма текущего подмассива может быть обновлена ​​одновременно.


*/

const splitArray = (nums, m) => {
  let n = nums.length;
  let ans = Number.MAX_VALUE;

  helper(0, 0, 0, 0);

  return ans;

  function helper(i, cntSubarrays, curSum, curMax) {
    if (i == n && cntSubarrays == m) {
      ans = Math.min(ans, curMax);
      return;
    }

    if (i == n) {
      return;
    }

    if (i > 0) {
      helper(i + 1, cntSubarrays, curSum + nums[i], Math.max(curMax, curSum + nums[i]));
    }

    if (cntSubarrays < m) {
      helper(i + 1, cntSubarrays + 1, nums[i], Math.max(curMax, nums[i]));
    }
  }
};
