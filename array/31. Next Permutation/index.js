/*
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1

[0, 1, 2, 5, 3, 3, 0] → [0, 1, 3, 0, 2, 3, 5]


https://www.nayuki.io/page/next-lexicographical-permutation-algorithm


Лучший подход к генерации всех перестановок - начать с самой низкой перестановки 
И многократно вычислять следующую перестановку на месте.

Во-первых, определите самый длинный суффикс, который не увеличивается (то есть слабо уменьшается если считать слева на право).

В нашем примере суффикс с этим свойством равен [5, 3, 3, 0].

Этот суффикс уже является самой высокой перестановкой !!!!!!

Поэтому мы не можем сделать следующую перестановку, просто изменив ее - нам нужно изменить некоторые элементы слева от нее.


Алгоритм Narayana Pandita:
  1) Найдити наибольший индекс i такой, что array[i - 1] < array[i]. 
    Если такого i не существует, то это уже последняя перестановка.

  2) Найдити наибольший индекс j такой, что j ≥ i и array[j] > array[i - 1].

  3) Swap array[j] и array[i − 1].

  4) Реверснуть суффикс начинающийся с индекса i + 1 и заканчивающийся j = nums.lenght - 1

 */

// Time O(N)
// Space O(1)
const nextPermutation = nums => {
  let n = nums.length;
  let i = n - 1;
  while (i >= 0 && nums[i - 1] >= nums[i]) i--;

  if (i <= 0) {
    nums.sort((a, b) => a - b);
    return nums;
  }

  i--;

  let j = n - 1;

  while (j >= 0 && nums[i] >= nums[j]) j--;

  swap(nums, i, j);

  j = n - 1;
  i++;

  while (i <= j) {
    swap(nums, i, j);
    i++;
    j--;
  }

  return nums;
};

function swap(nums, i, j) {
  return ([nums[i], nums[j]] = [nums[j], nums[i]]);
}
