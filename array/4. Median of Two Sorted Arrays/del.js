const calcMedian = (a1, a2, n, m) => {
  let i = 0; // count a1
  let j = 0; // count a2
  let m1 = -1,
    m2 = -1;
  let half = (m + n) / 2;
  // odd
  if ((m + n) % 2 === 1) {
    for (let k = 0; k < half; k++) {
      if (i !== n && j !== m) {
        m1 = a1[i] > a2[j] ? a2[j++] : a1[i++];
      } else if (i < n) {
        m1 = a1[i++];
      } else if (j < m) {
        m1 = a2[j++];
      }
    }
    return m1;
  }

  for (let k = 0; k <= half; k++) {
    m2 = m1;
    if (i !== n && j !== m) {
      m1 = a1[i] > a2[j] ? a2[j++] : a1[i++];
    } else if (i < n) {
      m1 = a1[i++];
    } else if (j < m) {
      m1 = a2[j++];
    }
  }
  return (m1 + m2) / 2;
};

const findMedianSortedArrays = function(nums1, nums2) {
  return calcMedian(nums1, nums2, nums1.length, nums2.length);
};

// [1, 12, 15, 26, 38], [2, 13, 17, 30, 45] // 16
const res = findMedianSortedArrays([1, 2], [3, 4]);
console.log('=====', res);
