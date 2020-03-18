/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = nums => {
  let max = 0;
  let cnt = 0;
  let curentEnd = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, i + nums[i]);

    if (i === curentEnd) {
      curentEnd = max;
      cnt++;
    }
  }

  return cnt;
};
