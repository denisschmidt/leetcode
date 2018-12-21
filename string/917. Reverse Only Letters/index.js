/*
Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place,
and all letters reverse their positions.

Example 1:
Input: "ab-cd"
Output: "dc-ba"

Example 2:
Input: "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"

Example 3:
Input: "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"

 */

/**
 * @param {string} str
 * @return {string}
 */
const reverseOnlyLetters = str => {
  let arr = str.split('');
  let newArr = arr;
  let size = str.length;
  let left = 0, right = size - 1;

  while (left < right) {
    if (arr[left].search(/[A-Za-z]/g) === -1) {
      left++;
    } else if (arr[right].search(/[A-Za-z]/g) === -1) {
      right--;
    } else {
      let temp = newArr[left];
      newArr[left] = newArr[right];
      newArr[right] = temp;
      left++;
      right--;
    }
  }
  return newArr.join('');
};

reverseOnlyLetters('Test1ng-Leet=code-Q!'); // j-Ih-gfE-dCba
