// Time O(2^N)
// Space O(N)
const canIWin = (maxChoosableInteger, desiredTotal) => {
  if (maxChoosableInteger >= desiredTotal) {
    return true;
  }

  // эта формула дает нам сумму от 1 ... maxChoosableInteger, и если сумма не может превысить требуемый итог, никто не выигрывает
  // кейс 5 и 50
  if (((1 + maxChoosableInteger) / 2) * maxChoosableInteger < desiredTotal) {
    return false;
  }

  let cache = new Map();
  let used = Array.from({ length: maxChoosableInteger }).map(() => false);

  return dfs(desiredTotal, used);

  function dfs(N, used = []) {
    // Cколько осталось в общей сумме, чтобы выиграть.
    // Если сумма меньше или равно 0, это означает, что предыдущий парень уже выиграл, так что этот парень проигрывает.
    if (N <= 0) {
      return false;
    }

    let key = used.toString();

    if (cache.has(key)) {
      return cache.get(key);
    }

    for (let i = 1; i <= maxChoosableInteger; i++) {
      if (used[i]) continue;

      used[i] = true;

      if (!dfs(N - i, used)) {
        cache.set(key, true);
        // Important!!! Don't forget about backtrack. We need delete the current number.
        used[i] = false;
        return true;
      }

      used[i] = false;
    }

    cache.set(key, false);

    return false;
  }
};
