/*
Given an array A of 0s and 1s, we may change up to K values from 0 to 1.

Return the length of the longest (contiguous) subarray that contains only 1s. 

Example 1:
  Input: A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
  Output: 6
  Explanation: 
    [1,1,1,0,0,1,1,1,1,1,1]
    Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.

Example 2:
  Input: A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
  Output: 10
  Explanation: 
    [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
    Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.
 

Note:
  1 <= A.length <= 20000
  0 <= K <= A.length
  A[i] is 0 or 1 

*/

/* 
  Найди самый длинный подмассив с максимум K нулями.
  
  Алгоритм: Sliding Window
  
  У нас есть два указателя start = 0 и end = 0

  Двигаем указатель end вправо пока у нас соблюдается условие ограничения.
  
  И при этом после каждой итерации подсчитываем максимум разности end - start.

  Если условие ограничения не выполняется попадаем во вложенный цикл.

  В котором двигаем указатель start до тех пор пока выходим за рамки ограничения.

  После цикла опять подсчитываем максимум end - start

          L ->        R
  nums = [0 1 1 1 0 1 0 1]    k = 2

*/

// Time O(N)
// Space O(1)
const longestOnes = (nums, k) => {
  let start = 0;
  let end = 0;
  let cnt = 0;
  let maxLen = 0;

  while (end < nums.length) {
    if (nums[end] === 0) {
      cnt++;
    }

    end++;

    while (cnt > k) {
      if (nums[start] === 0) {
        cnt--;
      }
      start++;
    }

    if (maxLen < end - start) {
      maxLen = end - start;
    }
  }

  return maxLen;
};
