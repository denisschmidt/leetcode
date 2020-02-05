/**
 * @param {number[]} nums
 * @return {number}
 */

/*

  [10,2,8,9,3,8,1,5,2,3,7,6]

  {
  '1': 1,
  '2': 2,
  '3': 2,
  '5': 1,
  '6': 1,
  '7': 1,
  '8': 2,
  '9': 1,
  '10': 1
}


*/

var maxEqualFreq = function(nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = ~~map[nums[i]] + 1;
  }

  let max = 0;
  let min = Number.MAX_VALUE;

  Object.keys(map).forEach(key => {
    max = Math.max(max, map[key]);
    min = Math.min(min, map[key]);
  });

  if (max === min) {
    return nums.length - 1;
  }

  console.log(map);
};

maxEqualFreq([10, 2, 8, 9, 3, 8, 1, 5, 2, 3, 7, 6]);
