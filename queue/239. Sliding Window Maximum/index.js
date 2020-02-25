/*

Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right.

You can only see the k numbers in the window.

Each time the sliding window moves right by one position.

Return the max sliding window.

Example:
  Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
  Output: [3,3,5,5,6,7] 
  Explanation: 

  Window position                Max
  ---------------               -----
  [1  3  -1] -3  5  3  6  7       3
  1 [3  -1  -3] 5  3  6  7       3
  1  3 [-1  -3  5] 3  6  7       5
  1  3  -1 [-3  5  3] 6  7       5
  1  3  -1  -3 [5  3  6] 7       6
  1  3  -1  -3  5 [3  6  7]      7

Note: You may assume k is always valid, 1 ≤ k ≤ input array's size for non-empty array.

Follow up: Could you solve it in linear time?


 */

/*

  10 5 2 7 8 7

  init loop
  [0, 1, 2]

  second loop
  [0, 1, 2] -> 10
  [1, 2] del
  [1] del
  [3] -> 7
  [3] del
  [4] -> 8
  [4] -> 8

 */

// Монотонная очередь
// Time O(N)
// Space O(N)
const maxSlidingWindow = function(nums, k) {
  const queue = [];
  const ans = [];

  for (let i = 0; i < k; i++) {
    while (queue.length && nums[i] > nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push(i);
  }

  //   Очередь - это список индексов, где их соответствующие значения расположены в порядке убывания.

  for (let i = k; i < nums.length; i++) {
    ans.push(nums[queue[0]]);

    // удаляем все значения их head потому что эти индексы уже устарели
    while (queue.length && queue[0] <= i - k) {
      queue.shift();
    }

    // удаляем все значения которые меньше текущего так как на этом интервале они не нужны
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }

    queue.push(i);
  }
  ans.push(nums[queue[0]]);
  return ans;
};

// Time (NLogK)
// Space O(N)
const maxSlidingWindow = function(nums, k) {
  let result = [];

  let pq = new PriorityQueue({ comparator: (a, b) => b.val - a.val });

  for (let i = 0; i < nums.length; i++) {
    pq.offer({ val: nums[i], index: i });

    while (!pq.isEmpty() && i - pq.peek().index >= k) {
      pq.poll();
    }

    if (pq.size() >= k) {
      result.push(pq.peek().val);
    }
  }

  return result;
};

// Time O(N) * log K
// Adding and extracting from the heap will take O(log k)
const maxSlidingWindow_III = function(nums, k) {
  let end = 0;
  let stack = [];
  let maxValue = nums[0];
  let ans = [];

  while (end < nums.length) {
    stack.push(nums[end]);

    if (stack.length === k) {
      maxValue = Math.max(...stack);
      ans.push(maxValue);
      stack.shift();
    }

    end++;
  }
  return ans;
};
