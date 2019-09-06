/*
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1

 */

/*
https://www.nayuki.io/page/next-lexicographical-permutation-algorithm


Лучший подход к генерации всех перестановок - начать с самой низкой перестановки и многократно вычислять следующую перестановку на месте.

[0, 1, 2, 5, 3, 3, 0]

Во-первых, определите самый длинный суффикс, который не увеличивается (то есть слабо уменьшается).

В нашем примере суффикс с этим свойством равен (5, 3, 3, 0).

Этот суффикс уже является самой высокой перестановкой !!!!!!

Поэтому мы не можем сделать следующую перестановку, просто изменив ее - нам нужно изменить некоторые элементы слева от нее.


Алгоритм Narayana Pandita:

Найдите наибольший индекс i такой, что array [i - 1] <array [i]. (Если такого i не существует, то это уже последняя перестановка.)

Найдите наибольший индекс j такой, что j ≥ i и array [j]> array [i - 1].

Swap array[j] и array[i − 1].

Реверснуть суффикс начинающийся с array[i]


 */
const swap = (nums, i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

// Time O(N)
// Space O(1)
const nextPermutation = function(nums) {
  let i = nums.length - 1;

  while (i > 0 && nums[i - 1] >= nums[i]) i--;

  if (i <= 0) {
    nums.sort((a, b) => a - b);
    return;
  }

  let j = nums.length - 1;

  while (nums[j] <= nums[i - 1]) j--;

  swap(nums, i - 1, j);

  j = nums.length - 1;
  while (i < j) {
    swap(nums, i, j);
    i++;
    j--;
  }
};
