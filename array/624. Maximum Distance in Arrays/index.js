/*

Given m arrays, and each array is sorted in ascending order. 
Now you can pick up two integers from two different arrays (each array picks one) and calculate the distance. 
We define the distance between two integers a and b to be their absolute difference |a-b|. Your task is to find the maximum distance.

Example 1:
  Input: 
    [[1,2,3],
    [4,5],
    [1,2,3]]
  
  Output: 4

Explanation:  One way to reach the maximum distance 4 is to pick 1 in the first or third array and pick 5 in the second array.

Note:
  Each given array will have at least 1 number. There will be at least two non-empty arrays.
  The total number of the integers in all the m arrays will be in the range of [2, 10000].
  The integers in the m arrays will be in the range of [-10000, 10000].

 */
// Time O(N)
// Space O(1)
const maxDistance = function (arrays) {
  if (arrays.length === 0) return 0;
  let ans = 0;
  let min = arrays[0][0];
  let max = arrays[0][arrays[0].length - 1];

  for (let i = 1; i < arrays.length; i++) {
    ans = Math.max(ans, Math.max(Math.abs(arrays[i][arrays[i].length - 1] - min), Math.abs(arrays[i][0] - max)));
    min = Math.min(min, arrays[i][0]);
    max = Math.max(max, arrays[i][arrays[i].length - 1]);
  }

  return ans;
};

const res = maxDistance([[-2], [-3, -2, 1]]);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// O(N^2)
// O(1)
const maxDistance2 = arrays => {
  if (arrays.length === 0) return 0;

  let ans = 0;
  for (let i = 0; i < arrays.length - 1; i++) {
    for (let j = 0; j < arrays.length; j++) {
      if (i === j) continue;
      let x = Math.abs(arrays[i][0] - arrays[j][arrays[j].length - 1]);
      let y = Math.abs(arrays[i][arrays[i].length - 1] - arrays[j][0]);

      ans = Math.max(ans, x, y);
    }
  }

  return ans;
};
