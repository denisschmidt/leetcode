/*
We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

Example 1:
  Input: points = [[1,3],[-2,2]], K = 1
  Output: [[-2,2]]

Explanation:
  The distance between (1, 3) and the origin is sqrt(10).
  The distance between (-2, 2) and the origin is sqrt(8).
  Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
  We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].

Example 2:
  Input: points = [[3,3],[5,-1],[-2,4]], K = 2
  Output: [[3,3],[-2,4]]
  (The answer [[-2,4],[3,3]] would also be accepted.)
 

Note:
  1 <= K <= points.length <= 10000
  -10000 < points[i][0] < 10000
  -10000 < points[i][1] < 10000

 */

// Time O(N) worst case O(N^2)
// Space O(1)
// Binary Search + Quick Select
const kClosest = (points, k) => {
  const n = points.length;

  let left = 0;
  let right = n - 1;

  while (left <= right) {
    let pivotIndex = quickSort(points, left, right);

    if (pivotIndex === k) break;

    if (pivotIndex > k) {
      right = pivotIndex - 1;
    } else {
      left = pivotIndex + 1;
    }
  }

  return points.slice(0, k);
};

function swap(nums, l, r) {
  return ([nums[l], nums[r]] = [nums[r], nums[l]]);
}

function compare([x, y], [u, z]) {
  let sum1 = Math.pow(x, 2) + Math.pow(y, 2);
  let sum2 = Math.pow(u, 2) + Math.pow(z, 2);

  return sum2 - sum1;
}

function quickSort(nums, l, r) {
  let pivotValue = nums[l];
  let pivotIndex = l;

  l++;

  while (l <= r) {
    if (compare(pivotValue, nums[l]) <= 0) {
      l++;
    } else if (compare(pivotValue, nums[r]) >= 0) {
      r--;
    } else {
      swap(nums, l, r);
    }
  }

  swap(nums, pivotIndex, r);

  return r;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(NLogN)
// Space O(N)
const kClosest = function(points, k) {
  const map = new Map();

  points.sort(([x, y], [u, z]) => {
    let sum1 = Math.pow(x, 2) + Math.pow(y, 2);
    let sum2 = Math.pow(u, 2) + Math.pow(z, 2);
    return sum2 - sum1;
  });

  let ans = [];
  let index = points.length - 1;
  while (k > 0 && index >= 0) {
    ans.push(points[index]);
    k--;
    index--;
  }
  return ans;
};
