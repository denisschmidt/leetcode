/* 

 Получить все простые множители числа n

 Для числа n напишите эффективную функцию для вывода всех простых множителей n. 
 Например, если входное число равно 12, то выходное значение должно быть «2 2 3». 
 А если номер входа 315, то выход должен быть «3 3 5 7»

*/
const primeFactors = n => {
  let nums = [];

  while (n % 2 == 0) {
    n = n / 2;
    nums.push(2);
  }

  // n должен быть нечетным в этой точке
  // Так что мы можем пропустить один элемент (примечание i = i +2)
  for (let i = 3; i <= Math.sqrt(n); i = i + 2) {
    while (n % i == 0) {
      n = n / i;
      nums.push(i);
    }
  }

  if (n > 2) {
    nums.push(n);
  }

  return nums;
};

let a = primeFactors(17);
console.log(a);
