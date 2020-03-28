/*

Find the smallest prime palindrome greater than or equal to N.

Recall that a number is prime if it's only divisors are 1 and itself, and it is greater than 1. 

For example, 2,3,5,7,11 and 13 are primes.

Recall that a number is a palindrome if it reads the same from left to right as it does from right to left. 

For example, 12321 is a palindrome.

Example 1:
  Input: 6
  Output: 7

Example 2:
  Input: 8
  Output: 11

Example 3:
  Input: 13
  Output: 101
  

Note:
  1 <= N <= 10^8
  The answer is guaranteed to exist and be less than 2 * 10^8.

*/

/*  

  Генерация всех нечетных палидромных последовательностей

*/

// Time O(LogN)
// Space O(1)
const primePalindrome = N => {
  if (8 <= N && N <= 11) return 11;
  for (let i = 1; i < 1e8; i++) {
    let s = i.toString();
    let r = getReverse(s);

    let num = Number.parseInt(s + r.substring(1));

    if (num >= N && isPrime(num)) return num;
  }

  return -1;
};

/*

 Brute Force работает, за исключением случаев, когда N составляет 8 цифр 
 
 Все восьмизначные палидромы не простые
 
 Поэтому мы можем пропустить все 8-значные числа. 
 
 Алгоритм:
  1) Для каждого номера проверяем является ли оно палиндромом. 
  
  2) Если да проверяем является ли оно простым. 
  
  3) Если число состоит из 8 цифр, переходим к 9-значным номерам.

*/

// Time O(N)
// Space O(1)
const primePalindrome_II = N => {
  while (true) {
    if (isPalidrome(N.toString()) && isPrime(N)) {
      return N;
    }
    N++;
    if (10000000 < N && N < 100000000) {
      N = 100000000;
    }
  }
};

function isPrime(N) {
  if (N <= 1) return false;

  let R = Math.sqrt(N);
  for (let i = 2; i <= R; i++) {
    if (N % i == 0) return false;
  }
  return true;
}

function isPalidrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right)
    if (str[left++] !== str[right--]) {
      return false;
    }
  return true;
}

function getReverse(s) {
  return s
    .split('')
    .reverse()
    .join('');
}
