// Time: O(M + N), where M, N are the lengths of nums1 and nums2.
// Space: O(N), the maximum size of the answer.
const intervalIntersection = (nums1, nums2) => {
  let i = 0;
  let j = 0;
  let ans = [];

  while (i < nums1.length && j < nums2.length) {
    let first = Math.max(nums1[i][0], nums2[j][0]);
    let second = Math.min(nums1[i][1], nums2[j][1]);

    if (first <= second) ans.push([first, second]);

    if (nums1[i][1] < nums2[j][1]) {
      i++;
    } else {
      j++;
    }
  }

  return ans;
};
