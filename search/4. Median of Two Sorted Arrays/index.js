/*
4. Median of Two Sorted Arrays

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5

 */

const input1 = [1, 12, 15, 26, 38];
const input2 = [2, 13, 17, 30, 45];

// Медиа́на — число, характеризующее выборку

// Если все элементы выборки различны, то медиана — это такое число выборки, что ровно половина из элементов выборки больше него,
// а другая половина меньше него.
// В более общем случае медиану можно найти, упорядочив элементы выборки по возрастанию или убыванию и взяв средний элемент.
//
// Например, выборка {11, 9, 3, 5, 5} после упорядочивания превращается в {3, 5, 5, 9, 11} и её медианой является число 5.
//
// Если в выборке чётное число элементов, медиана может быть не определена однозначно:
// для числовых данных чаще всего используют полусумму двух соседних значений (то есть медиану набора {1, 3, 5, 7} принимают равной 4.

const getMedian = (nums, n) => {
  const half = Math.floor(n / 2);
  return n % 2 === 0 ? (nums[half - 1] + nums[half]) / 2.0 : nums[half];
};

// Решение Time O(N + M) тривиально т.к нам просто достаточно обьединить массив и найти их медиану
// Решение следующее мы пытаемся найти две половины массивы такие чтобы
// левая часть nums1 и nums2 была меньше правой половины

// Тоесть
// x -> x1, x2, | x3, x4, x5, x6
// y -> y1, y2, y3, y4, y5, | y6, y7, y8, y9

// x2 <= y6 and y5 <= x3

// каждый элемент из левой части должен быть меньше каждого элемента из правой части

// после нахождения медиана это здачения их x2 x3,  y5 y6
// а именно max(x2, x3) and min(y5, y6)

const findMedianSortedArrays = function (input1, input2) {
  //if input1 length is greater than switch them so that input1 is smaller than input2.
  if (input1.length > input2.length) {
    return findMedianSortedArrays(input2, input1);
  }
  let x = input1.length;
  let y = input2.length;

  let low = 0;
  let high = x;

  while (low <= high) {
    // двигаем partitionX и partitionY в нужно направлении
    // одну часть увеличаем другую уменьшем пока не выполнится условие
    // каждый элемент слева меньше каждого справа
    let partitionX = Math.floor((low + high) / 2);
    let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

    let maxLeftX = partitionX === 0 ? -Number.MAX_VALUE : input1[partitionX - 1];
    let minRightX = partitionX === x ? Number.MAX_VALUE : input1[partitionX];

    let maxLeftY = partitionY === 0 ? -Number.MAX_VALUE : input2[partitionY - 1];
    let minRightY = partitionY === y ? Number.MAX_VALUE : input2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((x + y) % 2 === 0) {
        return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      high = partitionX - 1;
    } else {
      // если праваяX максимальная меньше чем леваяY
      // тогда двигаем X вправо
      low = partitionX + 1;
    }
  }

  return [];
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N + M)
// Space O(max(N, M))
const findMedianSortedArrays2 = function (nums1, nums2) {
  const merge = [...nums1, ...nums2].sort((a, b) => a - b);
  const median = getMedian(merge, merge.length);
  return median;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const calcMedian = (A1, A2, n) => {
  if (n <= 0) return -1;
  if (n === 1) return (A1[0] + A2[0]) / 2;
  if (n === 2) return (Math.max(A1[0], A2[0]) + Math.min(A1[1], A2[1])) / 2;

  let mid1 = getMedian(A1, n);
  let mid2 = getMedian(A2, n);

  if (mid1 === mid2) {
    return mid1;
  }

  let half = Math.floor(n - n / 2);

  if (mid1 > mid2) {
    if (n % 2 === 0) return calcMedian(A1.slice(0, n / 2), A2.slice(n / 2), half + 1);
    return calcMedian(A1.slice(0, n / 2 + 1), A2.slice(n / 2), half + 1);
  }

  if (n % 2 === 0) {
    return calcMedian(A1.slice(n / 2 - 1), A2.slice(0, n / 2), half + 1);
  }

  return calcMedian(A1.slice(n / 2), A2.slice(0, n / 2 + 1), half + 1);
};

// Time Complexity : O(logn)
// Algorithmic Paradigm: Divide and Conquer
const findMedianSortedArrays3 = function (nums1, nums2) {
  return calcMedian(nums1, nums2, nums1.length);
};
