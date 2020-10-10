/*

You have a number of envelopes with widths and heights given as a pair of integers (w, h). 

One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.

What is the maximum number of envelopes can you Russian doll? (put one inside other)

Note: Rotation is not allowed.

Example:
  Input: [[5,4],[6,4],[6,7],[2,3]]
  Output: 3 
  Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).

*/

/*
  Алгоритм:

  1) Сортируем массив ширину по возрастанию и высоту по убыванию если высоты одинаковые
  2) Найдите самую длинную увеличивающуюся подпоследовательность (LIS) основанную на высоте  

  Эта проблема требует LIS в двух измерениях, ширина и высота. 
  Сортировка по ширине уменьшает проблему на одно измерение. 
  Если ширина строго увеличивается, проблема эквивалентна поиску LIS только в измерении высоты. 
  
  Однако, когда есть пересечение по ширине, строго возрастающая последовательность в высоте не может быть правильным решением. 
  
  Например, [[3,3] не может вписаться в [3,4]]. 
  
  Следовательно сортировка по высоте в порядке убывания при наличии пересечения исключает такую последовательность

*/

// Time O(NLogN * N^2)
// Space O(N)
const maxEnvelopes = envelopes => {
  // sort on increasing in first dimension and decreasing in second
  envelopes.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }
    return a[0] - b[0];
  });

  let nums = [];
  for (let i = 0; i < envelopes.length; i++) {
    nums.push(envelopes[i][1]);
  }

  return getLIS(nums);
};

function getLIS(nums) {
  if (nums.length === 0) return 0;
  if (nums.length == 1) return 1;

  let max = 1;
  let dp = Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        dp[j] = Math.max(dp[j], dp[i] + 1);
        max = Math.max(max, dp[j]);
      }
    }
  }
  return max;
}
