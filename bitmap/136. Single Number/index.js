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

// Битовая манипуляция
//
// 1) Если мы возьмем XOR из нуля и некоторого бита, он вернет этот бит
// X XOR 0 = X

// 2) Если мы возьмем XOR двух одинаковых битов, он вернет
// X XOR X = 0

// Делаем XOR все биты вместе, чтобы найти уникальный номер.

// Time O(N)
// Space O(1)
const singleNumber = nums => {
  let ans = 0;

  for (let num of nums) {
    ans = ans ^ num;
  }
  return ans;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N)
// Space O(N)
const singleNumber = nums => {
  const map = new Map();

  for (let num of nums) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  }

  for (let [key, val] of map) {
    if (val === 1) {
      return key;
    }
  }
  return 0;
};
