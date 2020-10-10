// Time O(N)
// Space O(1)
const maxDistance = arrays => {
  if (arrays.length === 0) return 0;

  let ans = 0;
  let min = arrays[0][0];
  let max = arrays[0][arrays[0].length - 1];

  for (let i = 1; i < arrays.length; i++) {
    ans = Math.max(ans, Math.abs(arrays[i][arrays[i].length - 1] - min), Math.abs(arrays[i][0] - max));
    min = Math.min(min, arrays[i][0]);
    max = Math.max(max, arrays[i][arrays[i].length - 1]);
  }

  return ans;
};
