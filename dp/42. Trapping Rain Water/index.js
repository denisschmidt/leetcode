/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it is able to trap after raining.


The above elevation map is represented by array 
[0,1,0,2,1,0,1,3,2,1,2,1]. 

In this case, 6 units of rain water (blue section) are being trapped. 

Thanks Marcos for contributing this image!

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
 */

/*
  Алгоримт работы

  1) Найти максимальную высоту бара от левого конца до индекса i в массиве
  2) Найти максимальную высоту бара от правого конца до индекса i в массиве
  3) Итерируемся по массиву находим минимальную высоту, которой ограничена точка i и отнимает от нее nums[i]

*/

// DP
// Time O(N)
// Space O(N)
const trap = nums => {
  if (nums.length === 0) return 0;
  let n = nums.length;
  let left = [];

  left[0] = nums[0];
  for (let i = 1; i < n; i++) {
    left[i] = Math.max(left[i - 1], nums[i]);
  }

  let right = [];
  right[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], nums[i]);
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += Math.min(left[i], right[i]) - nums[i];
  }

  return ans;
};

/* 
 
  Решение через монотонный стек

  Основное внимание тут тому, что мы расчитываем площадь постепенно 
  Можно сказать по уровням, а не сразу для всего промежутка

*/
// Time O(n)
// Space O(N)
const trap_II = nums => {
  let stack = [];
  let result = 0;

  for (let index = 0; index < nums.length; index++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[index]) {
      let prevIndex = stack.pop();

      if (!stack.length) break;

      // В это кейсе у нас есть 3 высоты  stack[stack.length - 1]  prevIndex  index
      // И мы пытаемся получить площадь между этими тремя точками
      let width = i - stack[stack.length - 1] - 1;

      // выбираем минимальную из двух высот [10, 5, 9] min(10, 9)
      // высотой будет область  min(10, 9)  - nums[prevIndex]
      let height = Math.min(nums[index], nums[stack[stack.length - 1]]) - nums[prevIndex];

      result += width * height;
    }

    stack.push(index);
  }

  return result;
};

// Two pointers
// Time O(N)
// Space O(1)
const trap_III = nums => {
  let left = 0;
  let right = nums.length - 1;
  let water = 0;
  let level = 0;

  while (left < right) {
    let index = nums[left] < nums[right] ? left++ : right--;
    let lower = nums[index];
    level = Math.max(level, lower);
    water += level - lower;
  }

  return water;
};
