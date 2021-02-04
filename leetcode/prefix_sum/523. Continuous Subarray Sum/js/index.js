/*
  Алгоритм довольно не очевидный по началу, но в реализации оч крутой 
  
  1) Находим сумму на промежутке от 0 до i
  2) И если остаток от делания этой суммы от 0 до i равен остатку от деления от 0 до j 
  3) Тогда сумма [i + 1, j] делится на k 
  
  Формула: [0, i] % K == сумма [0, j] % K, тогда сумма [i + 1, j] делится на K.  
  
  Итак, для текущего индекса j где i < j нам нужно выяснить, а встречался ли уже подобный остаток от деления ранее.

*/

// Time O(N)
// Space O(N)
const checkSubarraySum = function (nums, k) {
  if (nums.length <= 1 || k === 0) {
    return false;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0 && nums[i + 1] === 0) {
      return true;
    }
  }

  const map = new Map();

  // почему тут -1 ?
  // В случае nums = [1, 5] k = 6, при i = 1, sum % k = 0, поэтому нам нужен ключ '0' в map
  // и он должен соответствовать непрерывному условию, i - map.get (sum) > 1, поэтому мы даем произвольное значение -1.
  map.set(0, -1);

  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let mod = sum % k;

    if (!map.has(mod)) {
      map.set(mod, i);
    } else {
      let pre = map.get(mod);

      if (i - pre >= 2) {
        return true;
      }
    }
  }

  return false;
};

// Time O(N^2)
// Space O(N)
const checkSubarraySum_II = function (nums, k) {
  if (nums.length === 0) {
    return false;
  }

  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];

      if ((sum % k === 0 || (sum === 0 && k === 0)) && j - i + 1 >= 2) {
        return true;
      }
    }
  }

  return false;
};
