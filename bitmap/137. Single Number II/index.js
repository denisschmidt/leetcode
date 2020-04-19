/*
Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. 
Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,3,2]
Output: 3
Example 2:

Input: [0,1,0,1,0,1,99]
Output: 99

 */

/*
  Алгоритм:

  1) Используем 32 битное представление каждого числа и ​​просто посчитаем сколько 1 есть в каждом бите
  2) Для каждого числа получаем его i бит и считаем общее кол-во 1 в этом бите 
  3) Если cntOnes не делиться нв 3 тогда пытаемся востановить исходное число операцией (или |, <<) 

*/

const singleNumber = nums => {
  let ans = 0;

  for (let i = 0; i < 32; i++) {
    let cntOnes = 0;

    for (let num of nums) {
      cntOnes += (num >> i) & 1;
    }

    if (cntOnes % 3 != 0) {
      ans |= 1 << i;
    }
  }

  return ans;
};

// Решение через битовые маски
// Time O(N)
// Space O(1)
const singleNumber_II = nums => {
  let seenOnce = 0;
  let seenTwice = 0;

  for (let num of nums) {
    seenOnce = ~seenTwice & (seenOnce ^ num);
    seenTwice = ~seenOnce & (seenTwice ^ num);
  }

  return seenOnce;
};
