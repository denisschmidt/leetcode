/*

Return the length of the shortest, non-empty, contiguous subarray of A with sum at least K.

If there is no non-empty subarray with sum at least K, return -1.

Example 1:
  Input: A = [1], K = 1
  Output: 1

Example 2:
  Input: A = [1,2], K = 4
  Output: -1

Example 3:
  Input: A = [2,-1,2], K = 3
  Output: 3

Note:
  1 <= A.length <= 50000
  -10 ^ 5 <= A[i] <= 10 ^ 5
  1 <= K <= 10 ^ 9

*/

/*

  Вычисляем префик сумму prefix

  prefix[j] - prefix[i] представляет сумму подмассива nums[i] ~ nums[j - 1]

  Например:
    [-11,-15,76,41,-41,68,41,12,73,-8]
    сумма 68 + 41 == prefix[0, j] - prefix[0, i]
  
  Queue содержит индексы увеличения prefix[i]

  Для каждого prefix[i] мы сравниваем prefix[i] - prefix[queue[0]] >= K

  Основная идея: Найти наименьший j, такой чтобы prefix[j] - prefix[i] >= K
    
*/

// Монотонная очередь
// Time O(N)
// Space O(N)
const shortestSubarray = function (nums, k) {
  let prefix = Array(nums.length + 1);
  prefix[0] = nums[0];

  for (let i = 0; i < nums.length; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }

  let queue = [];
  let len = Number.MAX_VALUE;

  for (let i = 0; i < nums.length + 1; i++) {
    /*
      
      Важный момент !!!

      Cуществует ли подмассив, который prefix[i] - prefix[queue[0]] >= K
    
      Если queue[0] существует в нашей очереди - это означает что до prefix[i] мы не смогли найти сумму

      И prefix[i] - первая сумма префикса, которая выполняет это условие.

      Другими словами, nums[queue[0]] ~ nums[i-1] является кратчайшим подмассивом, начинающимся с A [queue[0]] с суммой больше K.

      Мы уже нашли его для nusm[queue[0]] и он не может быть короче, поэтому мы можем удалить его из нашей очереди.

     */
    while (queue.length && prefix[i] - prefix[queue[0]] >= k) {
      len = Math.min(len, i - queue.shift());
    }

    // Поддерживаем возрастающую очередь
    // Если текущая последовательность уменьшается следовательно
    // Мы уже или нашли сумму или prefix[i] может помочь нам сократить длину подмассива и увеличить сумму
    while (queue.length && prefix[queue[queue.length - 1]] >= prefix[i]) {
      queue.pop();
    }

    queue.push(i);
  }

  return len === Number.MAX_VALUE ? -1 : len;
};
