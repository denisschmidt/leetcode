/*
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
  Output: [2,2]

Example 2:
  Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
  Output: [4,9]

Note:
  Each element in the result should appear as many times as it shows in both arrays.
  The result can be in any order.

Follow up:
  What if the given array is already sorted? How would you optimize your algorithm?
  What if nums1's size is small compared to nums2's size? Which algorithm is better?
  What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

*/

// Time O(n + m)
// Space O(min(n, m))
const intersect = function (nums1, nums2) {
  let map = {};
  let result = [];
  let a = nums1.length > nums2.length ? nums2 : nums1;
  let b = nums1.length > nums2.length ? nums1 : nums2;

  for (const n of b) {
    map[n] = ~~map[n] + 1;
  }

  for (const n of a) {
    if (n in map && map[n] > 0) {
      result.push(n);
      map[n]--;
    }
  }

  return result;
};
