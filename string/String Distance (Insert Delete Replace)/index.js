/*
  Существует три вида модифицирующих операции со строками: вставка, удаление символа и замена символа.
  Напишите функцию, которая проверяет, находятся ли две строки на рассоянии одной мотификации.

  Например:
    pale, ple => true
    pales, pale => true
    pale, bale => true
    pale, bake => false
 */

const oneEditReplace = (s1, s2) => {
  let foundDifference = false;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (foundDifference) {
        return false;
      }
      foundDifference = true;
    }
  }
  return true;
};

/* Проверить, возможно ли превратить s1 в s2 вставкой символа. */
const oneEditInsert = (s1, s2) => {
  let index1 = 0,
    index2 = 0;
  while (index1 < s1.length && index2 < s2.length) {
    if (s1[index1] !== s2[index2]) {
      if (index1 !== index2) {
        return false;
      }
      index2++;
    } else {
      index1++;
      index2++;
    }
  }
  return true;
};

/*
  Время О(n), где n длина более короткой строки.
 */
const oneEditAway = (first, second) => {
  if (first.length === second.length) {
    return oneEditReplace(first, second);
  } else if (first.length + 1 === second.length) {
    return oneEditInsert(first, second);
  } else if (first.length - 1 === second.length) {
    return oneEditInsert(second, first);
  }
};

const res = oneEditAway('pale', 'bake');

console.log('---', res);
