function compose(...funcs) {
  return funcs.reduce(
    (a, b) => (...args) => a(b(...args)),
    arg => arg,
  );
}

function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

// 589 - задача
function flatDeep(arr) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return [...acc, ...flatDeep(item)];
    }
    return [...acc, item];
  }, []);
}

function debounce(fn, ms = 0) {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
}

function path(obj, paths) {
  let id = 0;

  while (id < paths.length && obj) {
    let key = paths[id++];
    obj = obj[key];
  }

  return obj;
}

// сумма чисел до данного
function sumTo(n) {
  return (n * (n + 1)) / 2;
}

// удаление ключа из объекта
function removeProp(obj, removeKey) {
  return Object.keys(obj).reduce((acc, key) => {
    if (key == removeKey) {
      return acc;
    }
    acc[key] = obj[key];

    return acc;
  }, {});
}

// удаления индекса из массива
function removeIds(nums, ...args) {
  let set = new Set(args);
  return nums.filter((_, index) => !set.has(index));
}

// функция каррирования
function curry(fn) {
  if (fn.length === 0) {
    return fn;
  }

  function _curried(depth, args) {
    return newArgument => {
      if (depth - 1 === 0) {
        return fn(...args, newArgument);
      }

      return _curried(depth - 1, [...args, newArgument]);
    };
  }

  return _curried(fn.length, []);
}

function add(a, b) {
  return a + b;
}

const curriedAdd = curry(add);
const addFive = curriedAdd(5);

const result = [0, 1, 2, 3, 4, 5].map(addFive); // [5, 6, 7, 8, 9, 10]
