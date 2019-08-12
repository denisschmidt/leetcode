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

/*
Time complexity : O(n + m),
  where n and m are arrays' lengths.
  O(n) time is used to convert nums1 into set,
  O(m) time is used to convert nums2, and contains/in operations are \mathcal{O}(1)O(1) in the average case.

Space complexity : O(m+n) in the worst case when all elements in the arrays are different.
 */

const intersection = function(nums1, nums2) {
  let i = 0,
    set = new Set(),
    res = [];

  while (i < nums1.length) {
    if (nums2.includes(nums1[i])) {
      set.add(nums1[i]);
    }
    i++;
  }
  set.forEach(element => {
    res.push(element);
  });
  return res;
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
