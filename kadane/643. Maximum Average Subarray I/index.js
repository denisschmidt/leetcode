/*
Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value.
And you need to output the maximum average value.

Example 1:

Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75


Note:

1 <= k <= n <= 30,000.
Elements of the given array will be in the range [-10,000, 10,000].

 */

/*
  Алгоритм:

  Вместо того, чтобы сначала создавать массив кумулятивных сумм, а затем обходить его, чтобы определить требуемую сумму
  мы можем просто пройти через nums только один раз, и на ходу продолжать определять суммы, возможные для подмассивов длины k. 
  
  Чтобы понять идею, предположим, что мы уже знаем сумму элементов от индекса i до индекса i + k, скажем, это x. 
  
  Теперь, чтобы определить сумму элементов от индекса i + 1 до индекса i + k + 1, все, что нам нужно сделать,
  Это вычесть элемент nums[i] из x и добавить элемент nums[i + k + 1] в x. 
  
  Мы можем провести наш процесс на основе этой идеи и определить максимально возможное среднее.

*/

// Prefix Sum
// Time O(N)
// Space O(1)
const findMaxAverage = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let maxSum = sum;
  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum / k;
};

// Time: O(n^2)
// Space O(1)
const findMaxAverage_II = function (nums, k) {
  let n = nums.length;
  let max = -Number.MAX_VALUE;
  for (let i = 0; i <= n - k; i++) {
    let sum = nums[i];
    for (let j = i + 1; j < i + k; j++) {
      sum += nums[j];
    }
    max = Math.max(max, sum / k);
  }
  return max;
};

// Cumulative Sum
// Time O(N)
// Space O(1)
const findMaxAverage_III = function (nums, k) {
  let sum = [];
  sum.push(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i];
  }
  let ans = (sum[k - 1] * 1.0) / k;

  for (let i = k; i < nums.length; i++) {
    ans = Math.max(ans, (sum[i] - sum[i - k]) / k);
  }
  return ans;
};
