/*


*/

const shortestDistanceColor = (colors, queries) => {
  let map = new Map();
  let res = Array(queries.length).fill(-1);

  for (let i = 1; i <= 3; i++) {
    map.set(i, []);
  }

  for (let i = 0; i < colors.length; i++) {
    map.get(colors[i]).push(i);
  }

  for (let i = 0; i < queries.length; i++) {
    let [index, val] = queries[i];

    if (map.get(val).length) {
      res[i] = search(map.get(val), index);
    }
  }

  return res;

  function search(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;

    while (lo < hi) {
      let mid = lo + Math.floor((hi - lo) / 2);

      if (nums[mid] < target) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }

    // Если точного значения нету в массиве, nums[lo] > target
    if (lo > 0 && target - nums[lo - 1] < nums[lo] - target) {
      return target - nums[lo - 1];
    }

    return Math.abs(nums[lo] - target);
  }
};
