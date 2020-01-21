/*
Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

Example:
  Input: "aab"
  Output:
  [
    ["aa","b"],
    ["a","a","b"]
  ]

 */

/* 

Необходимо найти все подстроки которые являются палидромом

Алгоритм работы 

Допустим слово «aab», 
  1) Проверим, является ли [0,0] «a» палиндромом. 
  2) Затем проверим [0,1] «aa», затем [0,2] «aab». 
  
  При проверке [0,0] остальная часть строки - «ab», используйте ab в качестве ввода для выполнения рекурсивного вызова.

Допустим слово «aab»
  1) Проверим, является ли [0,0] «a» палиндромом. 
  2) Затем проверим [0,1] «aa», затем [0,2] «aab». 
  
  При проверке [0,0] остальная часть строки - «ab», используйте ab в качестве ввода для выполнения рекурсивного вызова. 
  
В приведенном коде в цикле i = l + 1 будет сделан рекурсивный вызов с input = "ab".

Каждый раз, когда делается рекурсивный вызов, позиция l перемещается вправо. 

Для строки с длиной N будет (N - 1) интервал между символами.
Для каждого интервала мы можем вырезать или не вырезать его, поэтому будет 2 ^ (N - 1) способов разбить строку.
Для каждого способа разбиения нам нужно проверить, является ли это палиндромом, то есть O (N).
Для каждого способа разбиения нам также нужно сделать копию разбиения substring, чтобы вставить в ответ, это O(N)


https://www.youtube.com/watch?v=4ykBXGbonlA

*/

// Time: O (N ^2 * 2 ^ N)
// Space O(N)
const partition = str => {
  let n = str.length;
  let ans = [];

  helper();

  return ans;

  function helper(comb = [], index = 0) {
    if (index === n) {
      ans.push([...comb]);
      return;
    }
    for (let i = index; i < n; i++) {
      if (isPalidrome(str, index, i)) {
        comb.push(str.substring(index, i + 1));
        helper(comb, i + 1);
        comb.pop();
      }
    }
  }

  function isPalidrome(str, left, right) {
    while (left < right)
      if (str[left++] !== str[right--]) {
        return false;
      }
    return true;
  }
};
