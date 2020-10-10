/*

Given an array nums, we call (i, j) an important reverse pair if i < j and nums[i] > 2*nums[j].

You need to return the number of important reverse pairs in the given array.

Example1:
  Input: [1,3,2,3,1]
  Output: 2

Example2:
  Input: [2,4,3,5,1]
  Output: 3

Note:
  The length of the given array will not exceed 50,000.
  All the numbers in the input array are in the range of 32-bit integer.

*/

// Time O(NLogN)
// Space O(N)
const reversePairs = nums => {
  let n = nums.length;
  let ans = 0;

  merge(nums);

  return ans;

  function merge(nums) {
    if (nums.length <= 1) {
      return nums;
    }

    let mid = Math.floor(nums.length / 2);

    let leftList = merge(nums.slice(0, mid));
    let rightList = merge(nums.slice(mid));

    let j = 0;

    for (let i = 0; i < leftList.length; i++) {
      while (j < rightList.length && leftList[i] / 2.0 > rightList[j]) {
        j++;
      }
      ans += j;
    }

    let l = 0;
    let r = 0;
    let index = 0;
    let result = [];

    while (l < leftList.length && r < rightList.length) {
      if (leftList[l] < rightList[r]) {
        result[index++] = leftList[l++];
      } else {
        result[index++] = rightList[r++];
      }
    }

    while (l < leftList.length) {
      result[index++] = leftList[l++];
    }

    while (r < rightList.length) {
      result[index++] = rightList[r++];
    }

    return result;
  }
};

// Time O(N^2)
// Space O(N)
const reversePairs_II = nums => {
  let n = nums.length;
  let res = 0;
  let tree = null;

  for (let i = 0; i < n; i++) {
    res += search(tree, nums[i] * 2 + 1);
    tree = insert(tree, nums[i]);
  }
  return res;
};

function search(node, target) {
  if (node == null) {
    return 0;
  }

  if (target == node.val) {
    return node.count_ge;
  }

  if (target < node.val) {
    return node.count_ge + search(node.left, target);
  }

  return search(node.right, target);
}

function insert(node, val) {
  if (node == null) {
    return new Node(val);
  }

  if (val == node.val) {
    node.count_ge++;
  } else if (val < node.val) {
    node.left = insert(node.left, val);
  } else {
    node.count_ge++;
    node.right = insert(node.right, val);
  }
  return node;
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.count_ge = 1;
  }
}
