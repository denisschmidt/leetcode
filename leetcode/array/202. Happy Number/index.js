/*
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer,
replace the number by the sum of the squares of its digits, and repeat the process until the number equals
1 (where it will stay), or it loops endlessly in a cycle which does not include 1.

Those numbers for which this process ends in 1 are happy numbers.

Example:
  Input: 19
  Output: true

Explanation:
  12 + 92 = 82
  82 + 22 = 68
  62 + 82 = 100
  12 + 02 + 02 = 1

 */

/*
  Уточнения по алгоритму:
  
  Числа с 4 или более цифрами всегда будут терять цифры на каждом шаге, пока они не уменьшатся до 3 цифр.

  Таким образом, мы знаем, что в худшем случае алгоритм может циклически обойти все числа до 243, 
  а затем вернуться к тому, в котором он уже был (цикл), или перейти к 1.

  3 - next → 243

  Мы знаем, что любые циклы должны содержать числа, меньшие 243, поскольку к чему-то большему нельзя вернуться.
  С такими маленькими числами нетрудно написать программу грубой силы, которая находит все циклы. 
  Если вы сделаете это, вы обнаружите, что есть только один цикл: 
  4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4. 
  
  Все остальные числа ведут в цикл, или ведут к 1. 
  
  Поэтому мы можем просто жестко закодировать HashSet, содержащий эти числа, 
  и если мы когда-нибудь достигнем одного из них, то мы знаем, что мы в цикле. 
  
*/

// Floyd Cycle detection algorithm.
// Time O(LogN)
// Space O(1)
const isHappy = n => {
  let slow = n;
  let fast = getNext(n);

  while (fast != -1 && slow != fast) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }

  return fast == 1;
};

// Time O(LogN)
// Space O(LogN)
const isHappy_II = n => {
  let sum = n;
  let set = new Set();

  while (sum !== 1) {
    sum = getNext(sum);
    // Если есть цикл
    if (set.has(sum)) return false;

    set.add(sum);
  }

  return true;
};

function getNext(num) {
  let sum = 0;
  while (num >= 10) {
    let x = num % 10;
    num = (num - x) / 10;
    sum += x * x;
  }
  return num * num + sum;
}
