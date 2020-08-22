// Правильное решение задачи
// Есть много правильных решений этой задачи.
// Одно из них – правильно указать границы интервала.
// Чтобы выровнять интервалы, мы можем генерировать числа от 0.5 до 3.5, это позволит добавить необходимые вероятности к min и max:

function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

// Получение случайного числа в интервале от [min, max]
function randomInteger_II(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
