/*

Count the number of prime numbers less than a non-negative number, n.

Example:
  Input: 10
  Output: 4
  Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

*/

// Time O(Nlog(N))
// Space O(N)
const countPrimes = n => {
  let cnt = 0;
  let notPrime = Array(n).fill(false);

  notPrime[0] = true;
  notPrime[1] = true;

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (notPrime[i] == false) {
      for (let j = 2; j * i < n; j++) {
        notPrime[i * j] = true;
      }
    }
  }

  for (let i = 0; i < notPrime.length; i++) {
    if (notPrime[i] == false) {
      cnt++;
    }
  }

  return cnt;
};
