/*

Design an Iterator class, which has:

A constructor that takes a string characters of sorted distinct lowercase English letters and a number combinationLength as arguments.
A function next() that returns the next combination of length combinationLength in lexicographical order.
A function hasNext() that returns True if and only if there exists a next combination.
 

Example:
  CombinationIterator iterator = new CombinationIterator("abc", 2); // creates the iterator.
  iterator.next(); // returns "ab"
  iterator.hasNext(); // returns true
  iterator.next(); // returns "ac"
  iterator.hasNext(); // returns true
  iterator.next(); // returns "bc"
  iterator.hasNext(); // returns false
 

Constraints:
  1 <= combinationLength <= characters.length <= 15
  There will be at most 10^4 function calls per test.
  It's guaranteed that all calls of the function next are valid.

*/

// Time O(K * C^K * N)
// Space O(N * K)
// Runtime O(1)
class CombinationIterator {
  constructor(characters, combinationLength) {
    this.combs = [];

    this.characters = characters;
    this.combinationLength = combinationLength;

    this.backtrack(0, []);
  }

  next() {
    return this.combs.shift();
  }

  hasNext() {
    return this.combs.length;
  }

  backtrack(start, comb) {
    if (comb.length == this.combinationLength) {
      this.combs.push(comb.join(''));
      return;
    }

    for (let i = start; i < this.characters.length; i++) {
      comb.push(this.characters[i]);
      this.backtrack(i + 1, comb);
      comb.pop();
    }
  }
}

// Algorithm L by D. E. Knuth: Lexicographic Combinations: Precomputation

// Алгоритм L является эффективной BFS, которая генерирует одну за другой комбинации индексов.

// https://leetcode.com/problems/iterator-for-combination/solution/

// Time O(K * C^K)

// Алгоритм генерирует новую комбинацию из предыдущей за время O(k),
// а затем использует время O(k), чтобы сохранить ее для дальнейшего использования.

// Всего есть C^K комбинаций, что делает сложность времени предварительного вычисления равной  O(K * C^K)

class CombinationIterator_II {
  constructor(characters, combinationLength) {
    let nums = [];
    let combinations = [];

    for (let i = 0; i < combinationLength; i++) {
      nums[i] = i;
    }

    nums[combinationLength] = characters.length;

    let j = 0;

    while (j < combinationLength) {
      let s = '';

      // добавить текущую комбинацию
      for (let i = combinationLength - 1; i > -1; i--) {
        s += characters[characters.length - 1 - nums[i]];
      }

      combinations.push(s);

      // Создать следующую комбинацию.
      // Найти первый j такой, что nums[j] + 1 != nums[j + 1].
      // Увеличить число [j] на единицу.

      j = 0;

      while (j < combinationLength && nums[j + 1] == nums[j] + 1) {
        nums[j] = j;
        j++;
      }

      nums[j]++;
    }

    this.combinations = combinations;
  }

  next() {
    return this.combinations.pop();
  }

  hasNext() {
    return this.combinations.length;
  }
}
