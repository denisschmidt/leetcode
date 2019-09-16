/*
Выберите случайное число из потока с space O(1)

Учитывая поток чисел, генерировать случайное число из потока.
Вам разрешено использовать только O(1) space, и ввод в виде потока, поэтому не может сохранить ранее просмотренные номера.
 */

/**
 * Your Solution will be called like this:
 * var sol = new Solution();
 * var stream = [1, 2, 3, 4];
 *
 * for (let i = 0; i < stream.length; i++) {
 *   console.log("Random number from first " + (i+1) +
 *     " numbers is " + sol.selectRandom(stream[i]));
 * }
 */

const randomValue = (min, max) => min + Math.floor(Math.random() * (max - min));

class Random {
  constructor() {
    this.res = null;
    this.count = 0;
  }

  selectRandom(num) {
    this.count++;

    // Если это первый элемент из потока, вернуть его
    if (this.count === 1) {
      this.res = num;
    } else {
      // Генерируем случайное число от 0 до count - 1
      const i = randomValue(0, this.count);

      // Заменить предыдущее случайное число новым числом с вероятностью 1 / число
      if (i === this.count - 1) {
        this.res = num;
      }
    }

    return this.res;
  }
}

const ran = new Random();
