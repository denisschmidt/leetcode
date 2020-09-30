/*

Find the kth largest element in an unsorted array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:
  Input: [3,2,1,5,6,4] and k = 2
  Output: 5

Example 2:
  Input: [3,2,3,1,2,4,5,5,6] and k = 4
  Output: 4

Note: You may assume k is always valid, 1 ≤ k ≤ array's length.

*/

// Time O(NlogK)
// Space O(K)
const findKthLargest = (nums, k) => {
  let pq = new PriorityQueue({ comparator: (a, b) => a - b });

  for (let x of nums) {
    pq.offer(x);
    if (pq.size() > k) {
      pq.poll();
    }
  }

  return pq.poll();
};

// Binary Search + Quick Select
// E.g. if the array is reversely sorted and you pick the pivot always as the first element of the partition,
// complexity's going to be O(n^2), because on every iteration you don't gain a lot of information other than the fact that all numbers
// in the subarray are bigger than the pivot.

// Time O(N)
// Worth case O(N^2)
// Space O(1)
const findKthLargest_II = (nums, k) => {
  let targetIndex = nums.length - k;
  let lo = 0;
  let hi = n - 1;

  while (lo <= hi) {
    let pivotIndex = quickSort(lo, hi);

    if (pivotIndex == targetIndex) {
      return nums[pivotIndex];
    }

    if (pivotIndex < targetIndex) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return nums[lo];

  function quickSort(lo, hi) {
    let pivotValue = nums[lo];
    let pivotIndex = lo;
    lo++;

    while (lo <= hi) {
      if (pivotValue > nums[lo]) {
        lo++;
      } else if (pivotValue <= nums[hi]) {
        hi--;
      } else {
        swap(nums, lo, hi);
      }
    }

    swap(nums, pivotIndex, hi);

    return hi;
  }

  function swap(nums, i, j) {
    return ([nums[i], nums[j]] = [nums[j], nums[i]]);
  }
};
