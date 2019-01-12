const memoize = fn => {
  let cache = {};
  return (...args) => {
    let stringifiedArgs = JSON.stringify(args);
    let result = (cache[stringifiedArgs] = cache[stringifiedArgs] || fn(...args));
    return result;
  };
};

const memoizee = fn => {
  let cache = {};
  return function() {
    // Создать строковую версию массива arguments для использования
    // в качестве ключа кэша.
    let key = arguments.length + Array.prototype.join.call(arguments, ',');
    if (key in cache) return cache[key];
    else return (cache[key] = fn.apply(this, arguments));
  };
};

module.exports = {
  memoize,
  memoizee,
};
