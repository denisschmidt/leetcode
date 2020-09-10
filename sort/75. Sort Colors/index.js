/*
Given an array with n objects colored red, white or blue,
sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:

Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Follow up:

A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
Could you come up with a one-pass algorithm using only constant space?

 */

// https://en.wikipedia.org/wiki/Dutch_national_flag_problem#Pseudocode

// Time O(N)
// Space O(1)

// Three Way Partitioning

// Один алгоритм состоит в том, чтобы верхняя группа росла сверху вниз от массива,
// нижняя группа росла снизу, а средняя группа оставалась чуть выше дна.
//
// Алгоритм индексирует три местоположения: нижнюю часть верхней группы, верхнюю часть нижней группы и верхнюю часть средней группы.
//
// Элементы, которые еще не отсортированы, попадают между средней и верхней группой.
//
// На каждом шаге изучите элемент чуть выше середины.
//
// Если он принадлежит верхней группе, поменяйте его местами с элементом чуть ниже вершины.
// Если он принадлежит снизу, поменяйте его местами с элементом чуть ниже.
// Если это посередине, оставьте это.
// Обновите соответствующий индекс.
//
// Сложность Θ(n)

var sortColors = function (nums) {
  if (!nums) {
    return;
  }
  let i = 0;
  let j = 0;
  let n = nums.length - 1;

  while (j <= n) {
    if (nums[j] === 1) {
      j++;
    } else if (nums[j] === 0) {
      swap(nums, i, j);
      i++;
      j++;
    } else {
      swap(nums, n, j);
      n--;
    }
  }
};
