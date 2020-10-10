/*

Given the array arr of positive integers and the array queries where queries[i] = [Li, Ri], for each query i compute the XOR of elements from Li to Ri (that is, arr[Li] xor arr[Li+1] xor ... xor arr[Ri] ). 

Return an array containing the result for the given queries.
 
Example 1:
  Input: arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
  Output: [2,7,14,8] 
  Explanation: 
  The binary representation of the elements in the array are:
  1 = 0001 
  3 = 0011 
  4 = 0100 
  8 = 1000 
  The XOR values for queries are:
  [0,1] = 1 xor 3 = 2 
  [1,2] = 3 xor 4 = 7 
  [0,3] = 1 xor 3 xor 4 xor 8 = 14 
  [3,3] = 8

Example 2:
  Input: arr = [4,8,2,10], queries = [[2,3],[1,3],[0,0],[0,3]]
  Output: [8,0,4,4]
 

Constraints:
  1 <= arr.length <= 3 * 10^4
  1 <= arr[i] <= 10^9
  1 <= queries.length <= 3 * 10^4
  queries[i].length == 2
  0 <= queries[i][0] <= queries[i][1] < arr.length

*/

// Поскольку XOR является коммутативной операцией

// Используем префикс сумму как и в задаче 303. Range Sum Query - Immutable.

// Сохраним все префиксы XOR от 0-i, где i находится в диапазоне от 0..arr.length-1
// Например: диапазон = [4,10]
// Тогда мы можем использовать XOR диапазона 0-10 и сделать XOR его с результатом диапазона 0-3
// В итоге получим требуемый диапазон, так как XOR 0-10 будет иметь значения XOR в диапазоне 0-3
// Тогда XOR диапазаона 0-10 с диапазоном 0-3 даст нам результат для [4-10]

// Time O(N)
// Space O(N)
const xorQueries = (arr, queries) => {
  let ans = [];
  let prefix = Array(arr.length).fill(0);

  for (let i = 1; i <= arr.length; i++) {
    prefix[i] = prefix[i - 1] ^ arr[i - 1];
  }

  for (let [i, j] of queries) {
    ans.push(prefix[i] ^ prefix[j + 1]);
  }

  return ans;
};
