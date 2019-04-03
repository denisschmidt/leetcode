function merge(а = [], b = [], lastA, lastB) {
  let indexA = lastA - 1;
  / * Индекс последнего элемента а * /;
  let indexB = lastB - 1;
  / * Индекс последнего элемента Ь * /;

  let indexMerged = lastB + lastA - 1;
  / * Конец объединенного массива * /;

  while (indexB >= 0) {
    /* конец а > конец Ь */
    if (indexA >= 0 && a[indexA] > b[indexB]) {
      a[indexMerged] = a[indexA]; // Копирование элемента
      indexA--;
    } else {
      a[indexMerged] = b[indexB];
      indexB--;
    }
    indexMerged--;
  }
}
