// Time O(LogN)
// Space O(1)
const smallestDivisor = (nums, threshold) => {
  let left = 1;
  let right = 1e6;

  while (left < right) {
    let m = Math.floor((left + right) / 2);

    if (calc(m) > threshold) {
      left = m + 1;
    } else {
      right = m;
    }
  }

  return left;

  function calc(m) {
    let sum = 0;

    for (let i of nums) {
      sum += Math.floor((i + m - 1) / m);
    }

    return sum;
  }
};
