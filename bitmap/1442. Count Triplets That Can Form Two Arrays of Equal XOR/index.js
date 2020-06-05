/*

Given an array of integers arr.

We want to select three indices i, j and k where (0 <= i < j <= k < arr.length).

Let's define a and b as follows:

a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]
b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]
Note that ^ denotes the bitwise-xor operation.

Return the number of triplets (i, j and k) Where a == b.

Example 1:
  Input: arr = [2,3,1,6,7]
  Output: 4
  Explanation: The triplets are (0,1,2), (0,2,2), (2,3,4) and (2,4,4)

Example 2:
  Input: arr = [1,1,1,1,1]
  Output: 10

Example 3:
  Input: arr = [2,3]
  Output: 0

Example 4:
  Input: arr = [1,3,5,7,9]
  Output: 3

Example 5:
  Input: arr = [7,11,12,9,5,2,7,17,22]
  Output: 8
 

Constraints:
  1 <= arr.length <= 300
  1 <= arr[i] <= 10^8

*/

// Time O(N^2)
// Space O(1)
const countTriplets = arr => {
  let n = arr.length;
  let res = 0;

  for (let i = 0; i <= n; i++) {
    let xor = arr[i];
    for (let j = i + 1; j < n; j++) {
      xor = xor ^ arr[j];

      if (xor == 0) {
        res += j - i;
      }
    }
  }

  return res;
};

// Prefix XOR
// Time O(N^2)
// Space O(N)
const countTriplets_II = arr => {
  let n = arr.length;
  let res = 0;
  let prefix = Array(n).fill(0);

  for (let i = 1; i <= n; ++i) prefix[i] = arr[i - 1] ^ prefix[i - 1];

  for (let i = 0; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (prefix[i] == prefix[j]) {
        res += j - i - 1;
      }
    }
  }

  return res;
};
