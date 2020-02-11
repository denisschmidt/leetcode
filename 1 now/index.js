/**
 * @param {number[]} nums
 * @return {string}
 */

var largestNumber = function(nums) {
  nums.sort((a, b) => {
    let s1 = a.toString();
    let s2 = b.toString();
  });
};

let a = largestNumber([1, 1]);
console.log(a);
