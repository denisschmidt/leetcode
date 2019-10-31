/*
Алгоритм сортировки слиянием можно разделить на три этапа, как и все алгоритмы «разделяй и властвуй»:

1) Разделите данный несортированный список на несколько подсписков. (Делить)

2) Сортировать каждый из списков рекурсивно

3) Объедините отсортированные списки, чтобы создать новый отсортированный список.

Пример реализации алгоритма top-down merge sort 

1)
Мы рекурсивно разделяем входной список на два подсписка, пока не останется подсписок с одним элементом.
Этот шаг деления вычисляет среднюю точку каждого из подсписков, что занимает O(1) время.
Этот шаг повторяется N раз, пока не останется один элемент, поэтому общая сложность времени составляет O(N).

2)
Затем мы периодически объединяем подсписки, пока не останется один единственный список.
Как показано в дереве рекурсии, на каждом уровне имеется всего N элементов.
Следовательно, для завершения процесса объединения на каждом уровне требуется время O(N).

А поскольку существует всего log*N уровней, общая сложность процесса слияния составляет O(N*logN).

 */

// Time O(N * LogN)
// Space O(N)
const mergeSort = nums => {
  // точка выхода их рекурсии
  if (nums.length <= 1) {
    return nums;
  }

  const pivot = Math.floor(nums.length / 2);

  const leftList = mergeSort(nums.slice(0, pivot));
  const rightList = mergeSort(nums.slice(pivot));

  return merge(leftList, rightList);
};

function merge(leftNums, rightNums) {
  const result = Array(leftNums.length + rightNums.length);

  let left = 0;
  let right = 0;
  let index = 0;

  while (left < leftNums.length && right < rightNums.length) {
    if (leftNums[left] < rightNums[right]) {
      result[index] = leftNums[left];
      left++;
    } else {
      result[index] = rightNums[right];
      right++;
    }
    index++;
  }

  // добавляем оставшиеся списки
  while (left < leftNums.length) {
    result[index] = leftNums[left];
    index++;
    left++;
  }

  while (right < rightNums.length) {
    result[index] = rightNums[right];
    index++;
    right++;
  }

  return result;
}

const res = mergeSort([1, 5, 3, 2, 8, 7, 6, 4]);
console.log(res);
