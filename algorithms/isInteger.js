// Возвращает true, если num – целое число, иначе false.
const isInteger = num => {
  return (num ^ 0) === num;
};

export default isInteger;
