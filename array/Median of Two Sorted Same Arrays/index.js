/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5

 */

const getMedian = (A, n) => {
  const half = Math.floor(n / 2);
  return n % 2 === 0 ? (A[half - 1] + A[half]) / 2.0 : A[half];
};

const calcMedian = (A1, A2, n) => {
  if (n <= 0) return -1;
  if (n === 1) return (A1[0] + A2[0]) / 2;
  if (n === 2) return (Math.max(A1[0], A2[0]) + Math.min(A1[1], A2[1])) / 2;

  let mid1 = getMedian(A1, n);
  let mid2 = getMedian(A2, n);

  if (mid1 === mid2) {
    return mid1;
  }

  let half = Math.floor(n - n / 2);

  if (mid1 > mid2) {
    if (n % 2 === 0) return calcMedian(A1.slice(0, n / 2), A2.slice(n / 2), half + 1);
    return calcMedian(A1.slice(0, n / 2 + 1), A2.slice(n / 2), half + 1);
  }

  if (n % 2 === 0) {
    return calcMedian(A1.slice(n / 2 - 1), A2.slice(0, n / 2), half + 1);
  }

  return calcMedian(A1.slice(n / 2), A2.slice(0, n / 2 + 1), half + 1);
};

// If we have a same size of array

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  return calcMedian(nums1, nums2, nums1.length);
};

// Time Complexity : O(logn)
// Algorithmic Paradigm: Divide and Conquer
const res = findMedianSortedArrays([1, 12, 15, 26, 38], [2, 13, 17, 30, 45]);
console.log('=====', res);
