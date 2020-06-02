// Algorithm L by D. E. Knuth: Lexicographic Combinations: Precomputation

// Алгоритм L является эффективной BFS, которая генерирует одну за другой комбинации индексов.

// https://leetcode.com/problems/iterator-for-combination/solution/

// Time O(K * C^K)

// Алгоритм генерирует новую комбинацию из предыдущей за время O(k),
// а затем использует время O(k), чтобы сохранить ее для дальнейшего использования.

// Всего есть C^K комбинаций, что делает сложность времени предварительного вычисления равной  O(K * C^K)

const generateLexicographicCombinations = (chars, len) => {
  let nums = [];
  let combinations = [];
  let n = chars.length;

  for (let i = 0; i < len; i++) {
    nums[i] = i;
  }

  nums[len] = chars.length;

  let j = 0;

  while (j < len) {
    let s = '';

    // добавить текущую комбинацию
    for (let i = len - 1; i >= 0; i--) {
      s += chars[n - 1 - nums[i]];
    }

    combinations.push(s);

    // Создать следующую комбинацию.
    // Найти первый j такой, что nums[j] + 1 != nums[j + 1].
    // Увеличить число [j] на единицу.

    j = 0;

    while (j < len && nums[j + 1] == nums[j] + 1) {
      nums[j] = j;
      j++;
    }

    nums[j]++;
  }

  return combinations;
};

let ans = generateLexicographicCombinations('abc', '2');

console.log(ans); // [ 'bc', 'ac', 'ab' ]
