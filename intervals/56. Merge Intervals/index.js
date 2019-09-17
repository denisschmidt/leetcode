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

// Просто пройдите интервалы, отсортированные по начальной координате,
// и либо объедините текущий интервал с предыдущим, если они перекрываются,
// либо добавьте его к выходу самостоятельно, если этого не происходит.

// Time: O(NlogN)
// Помимо вызова сортировки, мы выполняем простое линейное сканирование списка,
// поэтому во время выполнения преобладает сложность сортировки O(NlogN)
// Space: O(N) можно попробоавть сортировать intervals наместе тогда сложность будет O(1)
var merge = function(intervals) {
  const n = intervals.length;
  if (!n) return [];

  let ans = [];
  intervals.sort((a, b) => {
    let [x] = a;
    let [y] = b;
    return x - y;
  });
  ans.push(intervals[0]);

  for (let i = 1; i < n; i++) {
    let a = ans[ans.length - 1];
    let b = intervals[i];

    if (overlap(a, b)) {
      let min = Math.min(a[0], a[1], b[0], b[1]);
      let max = Math.max(a[0], a[1], b[0], b[1]);
      ans.pop();
      ans.push([min, max]);
    } else {
      ans.push(b);
    }
  }

  return ans;
};

function overlap([x, y], [u, z]) {
  return x <= z && u <= y;
}
