/*



Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:
  Input: [2,2,1]
  Output: 1
  
Example 2:
  Input: [4,1,2,1,2]
  Output: 4

 */

/*

  Битовая манипуляция используя XOR мы сможем найти уникальный номер

  1) Если мы возьмем XOR из нуля и некоторого бита, он вернет этот бит 12 XOR 0 = 12

  2) Если мы возьмем XOR двух одинаковых битов, он вернет 12 XOR 12 = 0

  [4, 1, 2, 1, 2]

  0 ^ 4 = 4
  
  4 ^ 1 = 5

  5 ^ 2 = 7
  
  7 ^ 1 = 6

  6 ^ 2 = 4
 
  Ответ: 4

*/

// Time O(N)
// Space O(1)
const singleNumber = nums => {
  let ans = 0;

  for (let num of nums) {
    ans = ans ^ num;
  }
  return ans;
};

// Time O(N)
// Space O(N)
const singleNumber_II = nums => {
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i]);
    } else {
      set.delete(nums[i]);
    }
  }

  return set.values().next().value;
};
