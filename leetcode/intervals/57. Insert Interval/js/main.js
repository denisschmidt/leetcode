function insert(intervals, newInterval) {
  if (intervals.length === 0) return [newInterval];

  let result = [];
  let min = Number.MAX_VALUE;
  let max = -Number.MAX_VALUE;
  let i = 0;

  while (i < intervals.length) {
    if (overlap(intervals[i], newInterval)) {
      min = Math.min(min, intervals[i][0], newInterval[0]);
      max = Math.max(max, intervals[i][1], newInterval[1]);

      if (i + 1 === intervals.length) {
        result.push([min, max]);
      }
    } else {
      if (min === Number.MAX_VALUE && max === -Number.MAX_VALUE) {
        if (result.length > 0 && result[result.length - 1][1] < newInterval[0] && newInterval[1] < intervals[i][1]) {
          result.push(newInterval);
        }

        result.push(intervals[i]);
      } else {
        result.push([min, max]);
        result.push(intervals[i]);
        break;
      }
    }
    i++;
  }

  if (i < intervals.length) {
    return [...result, ...intervals.slice(i + 1)];
  }

  if (min === Number.MAX_VALUE && max === -Number.MAX_VALUE) {
    if (newInterval[0] > intervals[intervals.length - 1][0]) {
      result.push(newInterval);
    } else if (newInterval[1] < intervals[0][0]) {
      result.unshift(newInterval);
    }
  }
  return result;
}

function overlap([x, y], [u, z]) {
  return x <= z && u <= y;
}
