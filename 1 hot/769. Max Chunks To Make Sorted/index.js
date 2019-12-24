/*
Given an array arr that is a permutation of [0, 1, ..., arr.length - 1],
we split the array into some number of "chunks" (partitions), and individually sort each chunk.

After concatenating them, the result equals the sorted array.

What is the most number of chunks we could have made?

Example 1:
  Input: arr = [4,3,2,1,0]
  Output: 1
  Explanation:
    Splitting into two or more chunks will not return the required result.
    For example, splitting into [4, 3], [2, 1, 0] will result in [3, 4, 0, 1, 2], which isn't sorted.

Example 2:
  Input: arr = [1,0,2,3,4]
  Output: 4
  Explanation:
    We can split into two chunks, such as [1, 0], [2, 3, 4].
    However, splitting into [1, 0], [2], [3], [4] is the highest number of chunks possible.

Note:
  arr will have length in range [1, 10].
  arr[i] will be a permutation of [0, 1, ..., arr.length - 1].

 */
/*

Основная идея состоит в том, чтобы использовать массив max[], чтобы отслеживать максимальное значение до текущей позиции,
и сравнивать его с отсортированным массивом (индексы от 0 до arr.length - 1).
Если max [i] равен элементу с индексом i в отсортированном массиве, то итоговый счет ++.

 */

// Time O(N)
// Space O(N)
const maxChunksToSorted = arr => {
  let size = arr.length;
  let max = [arr[0]];
  let result = 0;

  for (let i = 1; i < size; i++) {
    max[i] = Math.max(max[i - 1], arr[i]);
  }

  for (let i = 0; i < size; i++) {
    if (i === max[i]) result++;
  }

  return result;
};
