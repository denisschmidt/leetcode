/*
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]

 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(n) {
  const a = [];
  const set = new Set();
  for (let i = 0; i < n.length; i++) {
    if (!set.has(n[i])) set.add(n[i]);
    else a.push(n[i]);
  }
  return a;
};

const p = [2, 2];
console.log(findDuplicates(p));
