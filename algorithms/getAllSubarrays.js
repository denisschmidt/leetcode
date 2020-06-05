/*
  Generating subarrays

  Given an array, generate all the possible subarrays of the given array 

  Examples:
    Input : [1, 2, 3]
    Output : [1], [1, 2], [2], [1, 2, 3], [2, 3], [3]

    Input : [1, 2]
    Output : [1], [1, 2], [2]

*/

// Time O(N^2)
const getAllSubArrays = nums => {
  let n = nums.length;
  let res = [];

  helper(0, 0);

  return res;

  function helper(left, right) {
    if (right >= n) {
      return;
    }
    if (left > right) {
      helper(0, right + 1);
      return;
    }
    let tmp = [];

    for (let i = left; i <= right; i++) {
      tmp.push(nums[i]);
    }

    if (tmp.length) {
      res.push(tmp);
    }

    helper(left + 1, right);
  }
};

// Time O(N^2)
const getAllSubArrays_II = nums => {
  let n = nums.length;
  let res = [];

  for (let i = 0; i < n; i++) {
    let tmp = [nums[i]];

    res.push([nums[i]]);

    for (let j = i + 1; j < n; j++) {
      tmp.push(nums[j]);

      res.push([...tmp]);
    }
  }

  return res;
};
