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

const calcMedian = (A1, A2, n, m) => {
  let i = 0,
    j = 0,
    count,
    m1 = -1,
    m2 = -1;

  // odd
  // if n+m is odd then the middle
  // index is median i.e. (m+n)/2
  let x = (n + m) / 2;
  if ((m + n) % 2 === 1) {
    for (count = 0; count < (n + m) / 2; count++) {
      if (i !== n && j !== m) {
        m1 = A1[i] > A2[j] ? A2[j++] : A1[i++];
      } else if (i < n) {
        m1 = A1[i++];
      }
      // j < m
      else {
        m1 = A2[j++];
      }
    }
    return m1;
  }

  // median will be average of elements
  // at index ((m+n)/2 - 1) and (m+n)/2
  // in the array obtained after merging ar1 and ar2
  for (count = 0; count <= Math.floor((n + m) / 2); count++) {
    m2 = m1;
    if (i !== n && j !== m) {
      m1 = A1[i] > A2[j] ? A2[j++] : A1[i++];
    } else if (i < n) {
      m1 = A1[i++];
    }
    // for case when j<m,
    else {
      m1 = A2[j++];
    }
  }
  console.log('---', m1, m2);
  return (m1 + m2) / 2;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  return calcMedian(nums1, nums2, nums1.length, nums2.length);
};

// [1, 12, 15, 26, 38], [2, 13, 17, 30, 45] // 16
const res = findMedianSortedArrays([], [1]);
console.log('=====', res);

// Here we need to find the median of the two sorted arrays of different sizes
// so we keep two variables to point to the arrays and one used to count the no of elements read.

// We used a simple Merge based O(n) solution just we are not merging the array instead we are keeping track of the last element read
// till we reach the median

// There are two cases :

// Case 1: m+n is odd
// Then we will find a clear median at (m+n)/2 index in the array obtained
// after merging both the arrays so we just traverse both the arrays and keep the last value in m1 after the loop,
// m1 will contain the value of the median

// Case 2: m+n is even
// Median will be average of elements at index ((m+n)/2 – 1) and (m+n)/2 in the array obtained
// after merging both the arrays so we need to keep track of not only the last element
// but also the second last element (m2 is used for this)
// so we traverse both the arrays and keep the last value in m1 and second last value in m2 after the loop,
// (m1+m2)/2 will contain the value of the median.

// ==================================================================================
