// Time O(N^2)
const threeSumSmaller = (nums, target) => {
  let n = nums.length;
  let count = 0;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    if (nums[i] + nums[i + 1] + nums[i + 2] > target) break;

    let low = i + 1;
    let high = n - 1;

    // Находим все перестановки связанные с nums[i]
    while (low < high) {
      let sum = nums[i] + nums[low] + nums[high];

      if (sum < target) {
        // сколько элементов аналогично меньше target в промежутке от low до high ? это == high - low
        count += high - low;
        low++;
      } else {
        high--;
      }
    }
  }

  return count;
};
