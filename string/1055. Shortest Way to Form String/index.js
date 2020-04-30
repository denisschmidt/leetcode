/*

From any string, we can form a subsequence of that string by deleting some number of characters (possibly no deletions).

Given two strings source and target, return the minimum number of subsequences of source such that their concatenation equals target. 

If the task is impossible, return -1.

 
Example 1:
  Input: source = "abc", target = "abcbc"
  Output: 2
  Explanation: The target "abcbc" can be formed by "abc" and "bc", which are subsequences of source "abc".

Example 2:
  Input: source = "abc", target = "acdbc"
  Output: -1
  Explanation: The target string cannot be constructed from the subsequences of source string due to the character "d" in target string.

Example 3:
  Input: source = "xyz", target = "xzyxz"
  Output: 3
  Explanation: The target string can be constructed as follows "xz" + "y" + "xz".
 

Constraints:
  Both the source and target strings consist of only lowercase English letters from "a"-"z".
  The lengths of source and target string are between 1 and 1000.

*/

// Two Pointers
// Time O(N*M)
// Space O(1)
const shortestWay = (source, target) => {
  let i = 0;
  let cnt = 0;

  while (i < target.length) {
    let found = false;

    for (let j = 0; j < source.length; j++) {
      if (target[i] == source[j]) {
        found = true;
        i++;
      }
    }

    if (found == false) {
      return -1;
    }

    cnt++;
  }

  return cnt;
};

/*

  Идея состоит в том, чтобы создать inverted index, который сохраняет индексы вхождения буквы в строке.

  Структура данных индекса представлена ​​в виде хэш-карты, где ключ - это символ, а значение - это (отсортированный) список индексов.
   
  Затем используем бинарный поиск для эффективного поиска следующего индекса в нашем индексе.

  Если следующий индекс вхождения выходит за границы массива индексов, следовательно там нужна новая подпоследовательность.

  Которая будет начинаться с первого индекса вхождения в массиве вхождений.

*/

// Binary Search
// Time O(N + N * LogN)
// Space O(N)
const shortestWay_II = function(source, target) {
  let map = new Map();

  for (let i = 0; i < source.length; i++) {
    if (!map.has(source[i])) {
      map.set(source[i], []);
    }
    map.get(source[i]).push(i);
  }

  let cnt = 0;
  let nextIdx = -1;

  for (let i = 0; i < target.length; i++) {
    if (!map.has(target[i])) return -1;

    let nums = map.get(target[i]);
    let idx = search(nums, nextIdx);

    if (idx == nums.length) {
      cnt++;
      nextIdx = nums[0] + 1;
    } else {
      nextIdx = nums[idx] + 1;
    }
  }

  return cnt + 1;

  function search(nums, idx) {
    let lo = 0;
    let hi = nums.length;

    while (lo < hi) {
      let mid = lo + Math.floor((hi - lo) / 2);

      if (nums[mid] == idx) {
        return mid;
      }

      if (nums[mid] < idx) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }

    return lo;
  }
};

shortestWay_II('abcab', 'aabbaac');
