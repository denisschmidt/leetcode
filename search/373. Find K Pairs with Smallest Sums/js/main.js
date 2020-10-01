// MIN HEAP
// Time O(K*Log*K)
// Space O(N)
const kSmallestPairs = (nums1, nums2, k) => {
  if (nums2.length == 0) {
    return [];
  }

  let pq = new PriorityQueue({ comparator: (a, b) => a[0] - b[0] });
  let res = [];

  for (let i = 0; i < nums1.length; i++) {
    let x = nums1[i] + nums2[0];
    pq.offer([x, i, 0]);
  }

  while (!pq.isEmpty() && res.length < k) {
    let [_, i, j] = pq.poll();

    res.push([nums1[i], nums2[j]]);

    if (j + 1 < nums2.length) {
      pq.offer([nums1[i] + nums2[j + 1], i, j + 1]);
    }
  }

  return res;
};
