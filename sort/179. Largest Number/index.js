/*
Given a list of non negative integers, arrange them such that they form the largest number.

Example 1:
  Input: [10,2]
  Output: "210"

Example 2:
  Input: [3,30,34,5,9]
  Output: "9534330"

Note: The result may be very large, so you need to return a string instead of an integer.


*/

// Time O(NLogN)
// Space O(N)
const largestNumber = nums => {
  // Для сортировки массива нам нужен свой компоратор
  // Допустим у нас есть два числа которые мы преобразовали к строке: num1 = '9' и num2 = '31'
  // Тогда у нас есть два случая: num1 + nums == '931' или num2 + num1 = '319' очевидно что 1 вариант даст больший результат
  nums.sort((a, b) => {
    let s1 = a.toString() + b.toString();
    let s2 = b.toString() + a.toString();

    return s2 - s1;
  });

  let result = '';
  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }

  return Number(result) === 0 ? '0' : result;
};
