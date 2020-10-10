/*

Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, return a sorted array of only the integers that appeared in all three arrays.

Example 1:
  Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
  Output: [1,5]
  Explanation: Only 1 and 5 appeared in the three arrays.
  
Constraints:
  1 <= arr1.length, arr2.length, arr3.length <= 1000
  1 <= arr1[i], arr2[i], arr3[i] <= 2000

*/

// Time O(N)
// Space O(N)
const arraysIntersection = (arr1, arr2, arr3) => {
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let ans = [];

  while (p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {
    if (arr1[p1] == arr2[p2] && arr2[p2] == arr3[p3]) {
      ans.push(arr1[p1]);
      p1++;
      p2++;
      p3++;
    } else {
      if (arr1[p1] > arr2[p2] || arr3[p3] > arr2[p2]) {
        p2++;
      } else if (arr1[p1] > arr3[p3] || arr2[p2] > arr3[p3]) {
        p3++;
      } else if (arr2[p2] > arr1[p1] || arr3[p3] > arr1[p1]) {
        p1++;
      }
    }
  }
  return ans;
};
