/*
Given a collection of intervals, merge all overlapping intervals.

Example 1:
  Input: [[1,3],[2,6],[8,10],[15,18]]
  Output: [[1,6],[8,10],[15,18]]
  Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:
  Input: [[1,4],[4,5]]
  Output: [[1,5]]
  Explanation: Intervals [1,4] and [4,5] are considered overlapping.

NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

 */

// Сортируем интервалы по начальной координате
// Если интервалы пересекаются объединяем их если нет то нет

// Time: O(NlogN)
// Помимо вызова сортировки, мы выполняем простое линейное сканирование списка,
// поэтому во время выполнения преобладает сложность сортировки O(NlogN)
// Space: O(N) можно попробоавть сортировать intervals наместе тогда сложность будет O(1)
const merge = function (intervals) {
  if (intervals.length === 0) {
    return [];
  }

  let result = [];

  intervals.sort((a, b) => a[0] - b[0]);

  result.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    let a = result[result.length - 1];
    let b = intervals[i];

    if (overlap(a, b)) {
      let min = Math.min(a[0], b[0]);
      let max = Math.max(a[1], b[1]);

      result.pop();
      result.push([min, max]);
    } else {
      result.push(b);
    }
  }

  return result;

  function overlap([x, y], [u, z]) {
    return x <= z && u <= y;
  }
};
