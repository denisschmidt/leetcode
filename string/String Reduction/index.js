/*
Реализуйте метод сжатия строки с использованием счетчика повторяющихся символов.
Если сжатая строка не становится короче вернуть исходную

Например:
  aabcccccaaa -> a2b1c5a3

 */

const compressBab = str => {
  let resStr = '', count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
    if (i + 1 >= str.length || str[i] !== str[i + 1]) {
      resStr += str[i] + count;
      count = 0;
    }
  }
  return resStr.length > str.length ? str : resStr;
};

const res = compressBab('aabcccccaaa');

console.log('---', res);
