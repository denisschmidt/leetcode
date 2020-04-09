const memoize = fn => {
  let cache = new Map();

  return (...args) => {
    let stringifiedArgs = JSON.stringify(args);

    if (cache.has(stringifiedArgs)) {
      return cache.get(stringifiedArgs);
    }

    cache.set(stringifiedArgs, fn(...args));

    return cache.get(stringifiedArgs);
  };
};

const memoizeByResult = (fn, resolver = defaultResolver) => {
  const cache = new Map();

  return (...args) => {
    const newResult = fn(...args);
    const key = resolver(...args);
    const result = cache.get(key);

    if (newResult !== result && !R.equals(newResult, result)) {
      cache.set(key, newResult);
      return newResult;
    }

    return result;
  };
};

module.exports = {
  memoize,
  memoizee,
};
