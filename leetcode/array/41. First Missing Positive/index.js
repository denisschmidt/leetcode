/*
Given an unsorted integer array, find the smallest missing positive integer.

Example 1:
  Input: [1, 2, 0]
  Output: 3

Example 2:
  Input: [3, 4, -1, 1]
  Output: 2

Example 3:
  Input: [7,8,9,11,12]
  Output: 1

 */

// Time O(N)
// Space O(1)
const firstMissingPositive = nums => {
  let n = nums.length;
  // [0,1,4,5] ->
  // 1 свап [ 1, 0, 4, 5 ]
  // 2 свап [ 1, 0, 5, 4 ]

  for (let i = 0; i < n; i++) {
    // свапаем до тех пор пока в nums[i] не будет верного числа
    // если текущее число положительное и оно находится в правильной позиции
    // nums[1, 4, 5] при i = 0. nums[0] !== nums[0] -> следовательно 1 находится в верном положении

    while (nums[i] > 0 && nums[i] <= n && nums[i] != nums[nums[i] - 1]) {
      swap(i, nums[i] - 1);
    }
  }

  for (let i = 1; i <= n; i++) {
    if (i != nums[i - 1]) return i;
  }

  return n + 1;

  function swap(index1, index2) {
    return ([nums[index1], nums[index2]] = [nums[index2], nums[index1]]);
  }
};

// Time O(N)
// Space O(N)
const firstMissingPositive_II = nums => {
  const set = new Set(nums);
  let i = 1;
  while (set.has(i)) {
    i++;
  }
  return i;
};
