/*
You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.

Define a pair (u,v) which consists of one element from the first array and one element from the second array.

Find the k pairs (u1,v1),(u2,v2) ...(uk,vk) with the smallest sums.

Example 1:
  Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
  Output: [[1,2],[1,4],[1,6]]
  Explanation: The first 3 pairs are returned from the sequence:
             [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]

Example 2:
  Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
  Output: [1,1],[1,1]
  Explanation: The first 2 pairs are returned from the sequence:
             [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]

Example 3:
  Input: nums1 = [1,2], nums2 = [3], k = 3
  Output: [1,3],[2,3]
  Explanation: All possible pairs are returned from the sequence: [1,3],[2,3]

[1,1]
[1,2,5]

 */

const { PriorityQueue } = require('../../../algorithms/priorityQueue');

// Для каждого числа в nums1 его лучший партнер всегда исходит из nums2 [0], так как все массивы отсортированы;
// А для определенного числа в nums1 его следующим кандидатом может быть [это конкретное число] + nums2 [current_associated_index + 1],
// если только индекс не выходит за границы
//
// MIN HEAP
// Time O(K*Log*K) поскольку pq.size <= k, и мы делаем не более k цикла.
// Space O(N)

const kSmallestPairs = (nums1, nums2, k) => {
  if (nums1.length === 0 || nums2.length === 0 || k === 0) return [];
  const heap = new PriorityQueue({ comparator: (a, b) => a[0] + a[1] - (b[0] + b[1]) });
  const ans = [];

  // инициализируем heap
  for (let i = 0; i < nums1.length && i < k; i++) {
    heap.offer([nums1[i], nums2[0], 0]);
  }

  while (k-- > 0 && !heap.isEmpty()) {
    const [f, s, t] = heap.poll();
    ans.push([f, s]);

    if (t === nums2.length - 1) continue;

    heap.offer([f, nums2[t + 1], t + 1]);
  }

  return ans;
};

/*




*/

var kSmallestPairs_II = function(nums1, nums2, k) {
  if (nums1.length === 0 || nums2.length === 0 || k === 0) {
    return [];
  }

  let pq = new PriorityQueue({ comparator: (a, b) => a[0] + a[0] - (b[0] + b[1]) });

  for (let i = 0; i < nums1.length && i < k; i++) {
    pq.offer([nums1[i], nums2[0], 0]);
  }

  let result = [];

  while (!pq.isEmpty() && k > 0) {
    let [u, v, prevIndex] = pq.poll();

    result.push([u, v]);

    if (pq.isEmpty()) {
      for (let i = 0; i < nums1.length && i < k; i++) {
        pq.offer([nums1[i], nums2[0], prevIndex + 1]);
      }
    }
  }

  return result;
};
