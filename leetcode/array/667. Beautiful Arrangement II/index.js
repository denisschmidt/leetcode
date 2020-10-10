/*

Given two integers n and k, you need to construct a list which contains n different positive integers ranging from 1 to n and obeys the following requirement:
Suppose this list is [a1, a2, a3, ... , an], then the list [|a1 - a2|, |a2 - a3|, |a3 - a4|, ... , |an-1 - an|] has exactly k distinct integers.

If there are multiple answers, print any of them.

Example 1:
  Input: n = 3, k = 1
  Output: [1, 2, 3]
  Explanation: The [1, 2, 3] has three different positive integers ranging from 1 to 3, and the [1, 1] has exactly 1 distinct integer: 1.

Example 2:
  Input: n = 3, k = 2
  Output: [1, 3, 2]
  Explanation: The [1, 3, 2] has three different positive integers ranging from 1 to 3, and the [2, 1] has exactly 2 distinct integers: 1 and 2.

Note: The n and k are in the range 1 <= k < n <= 104.

*/

// Перестановка массива нужна только от [0, k] индекса
// Остальная часть массива остается как есть, в ней дифф будет постоянен и равен 1

// Как сгенерировать K различных диффов ???

// Используем указатели left и right и создаем пару из самого мин. значения и самого макс. значения

// Time O(N)
// Space O(N)
var constructArray = (n, k) => {
  let nums = Array(n)
    .fill(0)
    .map((_, i) => i + 1);
  let reversed = [];
  let left = 0;
  let right = k;

  while (left < right) {
    reversed.push(nums[left++]);
    reversed.push(nums[right--]);
  }

  if (k % 2 == 0) {
    reversed.push(nums[left]);
  }

  return [...reversed, ...nums.slice(k + 1)];
};
