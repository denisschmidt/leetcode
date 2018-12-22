/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const len = nums.length
  let result = []

  if(len < 4) {
    return result
  }

  nums.sort((a, b) => a - b)

  for (let i = 0; i < len-2; i++) {
    if(nums[i] + nums[i+1] + nums[i+2] > 0) break
    if(nums[i] + nums[len - 1] + nums[len - 2] < 0) continue
    if (i>0 && nums[i] === nums[i-1]) continue //убираем дубли

    let low = i + 1
    let high = len - 1

    while (low < high) {
      let sum = nums[i] + nums[low] + nums[high]
      if(sum < 0) {
        low++
      } else if (sum > 0) {
        high--
      } else {
        result.push([nums[i], nums[low], nums[high]])
        do{low++;}while(nums[low]==nums[low-1] && low<high); //скипаем low дубли
        do{high--;}while(nums[high]==nums[high+1] && low<high); //скипаем high дубли
      }
    }
  }
  return result
};

const res = threeSum([-1, 0, 1, 2, -1, -4])

console.log(res)
