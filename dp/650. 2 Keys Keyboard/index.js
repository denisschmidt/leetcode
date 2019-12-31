/*

Initially on a notepad only one character 'A' is present. 
You can perform two operations on this notepad for each step:

  Copy All: You can copy all the characters present on the notepad (partial copy is not allowed).
  Paste: You can paste the characters which are copied last time.
 

  Given a number n. 
  You have to get exactly n 'A' on the notepad by performing the minimum number of steps permitted. 
  Output the minimum number of steps to get n 'A'.

Example 1:
  Input: 3
  Output: 3
  Explanation:
    Intitally, we have one character 'A'.
    In step 1, we use Copy All operation.
    In step 2, we use Paste operation to get 'AA'.
    In step 3, we use Paste operation to get 'AAA'.
 
Note:
  The n will be in the range [1, 1000].

*/

// Time O(N^2)
// Space O(N)
// В худшем случае для простого числа сложность N^2
const minSteps = n => {
  let dp = [];

  // Изначально инициализируем значния как будто мы скопировали 1 символ и делаем вставку равную длине слова
  for (let i = 0; i < 1001; i++) {
    dp[i] = i;
  }

  dp[0] = 0;
  dp[1] = 0;

  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= i; j++) {
      if (i % j === 0) {
        dp[i] = dp[i / j] + j;
        break;
      }
    }
  }

  return dp[n];
};

const minSteps_II = () => {};
