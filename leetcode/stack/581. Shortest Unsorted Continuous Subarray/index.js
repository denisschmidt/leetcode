/*

Given an integer array, you need to find one continuous subarray that if you only sort this subarray
 in ascending order, then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.

Example 1:
  Input: [2, 6, 4, 8, 10, 9, 15]
  Output: 5
  Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.

Note:
  Then length of the input array is in range [1, 10,000].
  The input array may contain duplicates, so ascending order here means <=.

*/

/* 

  Само задание исходит из того что у нас есть только 1 максимальнй подмассив который не отсортирован
  Тоесть все что нам нужно знать это minIndex и maxIndex которые находятся не в своей позиции

  Впринципе монотонный (убывающий/возрастающий) стек позволяет найти maxIndex или minIndex в стеке
  
  ВАЖНО ПОНИМАТЬ!!!
    Если у нас условие на (увеличение/убыванияе) стека не выполняется.
    Мы удаляем все элементы из стека, которые нарушают условие.

  Так мы можем получить все индексы или значения, которые нарушают последовательность стека.

  Пример:
    [2, 4, 5, 6, 7, 8, 3]     
    Стек -> [2, 4, 5, 6, 7, 8] мы дошли до 3
    Удаляем все значения из стека которые нарушают последовательность
    Стек -> [2, 3] следовательно самое первое нарушение стека находится на i = 1 где nums[i] = 4
  
  Решение через двойной проход по массиву 
    1) Используя монотонно возрастающий стек
    2) Используя монотонно убывающий стек

  Это даст нам minIndex и maxIndex в массиве

*/

// Time O(N)
// Space O(N)
const findUnsortedSubarray = nums => {
  let stack = [];
  let min = nums.length;

  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
      min = Math.min(min, stack.pop());
    }
    stack.push(i);
  }

  stack = [];

  let max = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      max = Math.max(max, stack.pop());
    }
    stack.push(i);
  }

  return max - min > 0 ? max - min + 1 : 0;
};

/* 
  
  Делаем перебор всех вариантов brute force
  Находим nums[i] и nums[j] которые находятся не в правильной последовательности
  И сохраняем minIndex и maxIndex

*/

// Time O(N^2)
// Space O(1)
const findUnsortedSubarray_II = function (nums) {
  let start = nums.length;
  let end = -Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        start = Math.min(start, i);
        end = Math.max(end, j);
      }
    }
  }

  return end - start < 0 ? 0 : end - start + 1;
};
