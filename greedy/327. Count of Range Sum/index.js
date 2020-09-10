/*
Given an integer array nums, return the number of range sum that lie in [lower, upper] inclusive.
Range sum S(i, j) is defined as the sum of the elements in nums between indices i and j (i ≤ j), inclusive.

Note: A naive algorithm of O(n2) is trivial. You MUST do better than that.

Example:
  Input: nums = [-2,5,-1], lower = -2, upper = 2,
  Output: 3
  Explanation: The three ranges are : [0,0], [2,2], [0,2] and their respective sum are: -2, -1, 2.


Решение на основе сортировки слиянием подсчитывает ответ при выполнении слияния.
На этапе слияния мы уже отсортировали левую половину [начало, середина) и правую половину [середина, конец).

Затем мы перебираем левую половину с индексом i.

Для каждого i нам нужно найти два индекса k и j в правой половине,
где j - первый индекс, удовлетворяющий sums[j] - sums[i]> upper

и k - первый индекс, удовлетворяющий sums[k] - sums[i]> = lower.

Тогда количество сумм в [lower, upper] равно j-k.

Несмотря на вложенные циклы, временная сложность этапа «слияния и подсчета» остается линейной.
Поскольку индексы k, j, t будут только увеличиваться, но не уменьшаться,
каждый из них будет проходить только правую половину не более одного раза.

Общая временная сложность этого решения «разделяй и властвуй» тогда равна O(N * logN).

 */

// Time O(N*LogN)
// Space O(N)
const countRangeSum = function (nums, lower, upper) {
  if (nums.length === 0) {
    return 0;
  }

  const sums = [];
  let sum = 0;
  let cnt = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum >= lower && sum <= upper) cnt++;
    sums[i] = sum;
  }

  mergeSort(sums);

  return cnt;

  function mergeSort(arr) {
    if (arr.length === 1) return arr;

    const mid = Math.floor(arr.length / 2);

    const leftList = mergeSort(arr.slice(0, mid));
    const rightList = mergeSort(arr.slice(mid));

    return merge(leftList, rightList);
  }

  function merge(leftNums, rightNums) {
    let result = [];
    let j = 0;
    let k = 0;
    let left = 0;
    let right = 0;

    console.log('===', leftNums, rightNums);

    for (let i = 0; i < leftNums.length; i++) {
      // находим индексы которые удовлетворяют условию
      while (j < rightNums.length && rightNums[j] - leftNums[i] < lower) j++;

      while (k < rightNums.length && rightNums[k] - leftNums[i] <= upper) k++;

      // сортируем подмассивы
      while (left < leftNums.length && right < rightNums.length) {
        if (leftNums[left] <= rightNums[right]) {
          result.push(leftNums[left++]);
        } else {
          result.push(rightNums[right++]);
        }
      }

      // добавляем оставшиеся списки
      while (left < leftNums.length) {
        result.push(leftNums[left++]);
      }

      // добавляем оставшиеся списки
      while (right < rightNums.length) {
        result.push(rightNums[right++]);
      }

      cnt += k - j;
    }
    return result;
  }
};

let nums = [-2, 5, -1, 5, 2];
let lower = -2;
let upper = 2;
const res = countRangeSum(nums, lower, upper);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N^2)
// Space O(1)
const countRangeSum2 = (nums, lower, upper) => {
  let sum = 0;
  let cnt = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = nums[i];
    if (sum >= lower && sum <= upper) cnt++;
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum >= lower && sum <= upper) cnt++;
    }
  }
  return cnt;
};
