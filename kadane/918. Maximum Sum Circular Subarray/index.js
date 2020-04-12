/*

Given a circular array C of integers represented by A, find the maximum possible sum of a non-empty subarray of C.

Here, a circular array means the end of the array connects to the beginning of the array.  
(Formally, C[i] = A[i] when 0 <= i < A.length, and C[i+A.length] = C[i] when i >= 0.)

Also, a subarray may only include each element of the fixed buffer A at most once.  
(Formally, for a subarray C[i], C[i+1], ..., C[j], there does not exist i <= k1, k2 <= j with k1 % A.length = k2 % A.length.)

Example 1:
  Input: [1,-2,3,-2]
  Output: 3
  Explanation: Subarray [3] has maximum sum 3

Example 2:
  Input: [5,-3,5]
  Output: 10
  Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10

Example 3:
  Input: [3,-1,2,-1]
  Output: 4
  Explanation: Subarray [2,-1,3] has maximum sum 2 + (-1) + 3 = 4

Example 4:
  Input: [3,-2,2,-3]
  Output: 3
  Explanation: Subarray [3] and [3,-2,2] both have maximum sum 3

Example 5:
  Input: [-2,-3,-1]
  Output: -1
  Explanation: Subarray [-1] has maximum sum -1
 

Note:
  -30000 <= A[i] <= 30000
  1 <= A.length <= 30000

*/

/*

  Есть два возможных случая для подмассива: 
    1) Подмассив находится внутри исходного массива {x x x (x x x x) x x x} 
    2) Подмассив занимает конец исходного массива {x x x x x x x (x x x} {x x) x x x x x x x x} 
    
  Второй случай можно рассматривать как 
    1) Сумму двух подмассивов в исходном массиве: {(х х) х х х х х (х х х)} 
    2) Сумму исходного массива минус сумма подмассива в середине: {х х (х х х х х) х х х} 
    
  Следовательно, максимальная сумма подмассива в этом случае = sum (A) - minSubarraySum(A) 
  
  Функция maxSubarraySum вычисляет максимальную сумму подмассива. 
  
  Функцию также можно использовать для вычисления minSubarraySum после инвертирования каждого элемента в массиве (пусть A [i] = -A [i]). 

*/

// Time O(N)
// Space O(1)
const maxSubarraySumCircular = function(nums) {
  let sum = 0;

  for (let x of nums) sum += x;

  let sum1 = kadane(nums, 0, nums.length - 1, 1);
  let sum2 = sum + kadane(nums, 1, nums.length - 1, -1);

  return Math.max(sum1, sum2);
};

function kadane(nums, i, j, sign) {
  if (i > j) return 0;

  let cur = sign * nums[i];
  let max = sign * nums[i];

  for (let k = i + 1; k <= j; k++) {
    let val = sign * nums[k];
    cur = Math.max(cur + val, val);
    max = Math.max(max, cur);
  }
  return max;
}

/* 

  Во-первых, мы можем сформулировать проблему как проблему на фиксированном массиве.

  Любой подмассив кругового массива A, можно представить, как подмассив фиксированного массива A.len + A.len.

  A = [0,1,2,3,4,5] круговой массив 
  
  Тогда подмассив [4,5,0,1] также является подмассивом фиксированного массива [0,1,2,3,4,5,0,1,2,3,4,5]

*/

// Time O(N)
// Space O(N)
const maxSubarraySumCircular_II = function(nums) {
  let n = nums.length;

  let prefix = [nums[0]];

  for (let i = 1; i < 2 * n; i++) {
    prefix[i] = prefix[i - 1] + nums[i % n];
  }

  let queue = [0];
  let ans = nums[0];

  for (let j = 1; j < 2 * n; j++) {
    // Если queue[0] выходит за наш рендж удалить его
    if (queue[0] < j - n) {
      queue.shift();
    }

    // рассчитываем сумму на интервале от i - j
    ans = Math.max(ans, prefix[j] - prefix[queue[0]]);

    while (queue.length && prefix[j] <= prefix[queue[queue.length - 1]]) {
      queue.pop();
    }

    queue.push(j);
  }

  return ans;
};
