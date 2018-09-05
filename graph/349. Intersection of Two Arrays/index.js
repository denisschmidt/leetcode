/*
Given two arrays, write a function to compute their intersection.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]


Note:

Each element in the result must be unique.
The result can be in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let i = 0, set = new Set(), res = []

  while(i < nums1.length) {
    if (nums2.includes(nums1[i])) {
      set.add(nums1[i])
    }
    i++
  }
  set.forEach(element => {
    res.push(element)
  })
  return res
};

console.log(intersection([4,9,5], [9,4,9,8,4]))
