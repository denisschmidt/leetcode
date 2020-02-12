/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  let nums = num.toString().split('');

  for (let i = 0; i < nums.length; i++) {
    let n1 = num[i];
    let found = false;
    for (let j = i + 1; j < array.length; j++) {
      if (nums[j] > n1) {
        let t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
        found = true;
      }
    }

    if (found) {
      break;
    }
  }

  return Number(nums.join(''));
};
