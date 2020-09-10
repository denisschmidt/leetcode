/*

Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive),
prove that at least one duplicate number must exist.

Assume that there is only one duplicate number, find the duplicate one.

Example 1:

  Input: [1,3,4,2,2]
  Output: 2

Example 2:
  Input: [3,1,3,4,2]
  Output: 3
Note:

 */

// Time O(N)
// Space O(N)
const findDuplicate = function (nums) {
  if (nums.length < 1) return -1;

  let slow = nums[0];
  let fast = nums[nums[0]];

  // Первый цикл while находит место встречи
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  /*

  Второй шаг: утановим один из укзателей в точке 0, а другой указатель останется на месте встречи. 
  
  Теперь продвигаем оба указателя по одному узлу каждую единицу времени, точка встречи является отправной точкой цикла. 
  
  Следовательно, перемещая fast указатель в начало связанного списка и перемещаясь по одному узлу за раз оба указателя будут имень одинаковое расстояние до встречи. 
  
  Как результат они достигнут точки, где цикл начинается в связанном списке.
  
  */

  fast = 0;

  while (fast != slow) {
    fast = nums[fast];
    slow = nums[slow];
  }

  return slow;
};

// Time O(N)
// Space O(N)
const findDuplicate_II = nums => {
  let set = new Set();
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i]);
    } else {
      return nums[i];
    }
  }

  return -1;
};
