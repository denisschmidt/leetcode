/*
On a horizontal number line, we have gas stations at positions stations[0], stations[1], ..., stations[N-1], 
where N = stations.length.

Now, we add K more gas stations so that D, the maximum distance between adjacent gas stations, is minimized.

Return the smallest possible value of D.

Example:
  Input: stations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], K = 9
  Output: 0.500000

Note:
  stations.length will be an integer in range [10, 2000].
  stations[i] will be an integer in range [0, 10^8].
  K will be an integer in range [1, 10^6].
  Answers within 10^-6 of the true value will be accepted as correct.

*/

/*
Нужно найти минимальное значение которое возможно между двумя максимальными станциями

1) Чтобы построить подходящее решение, нам нужно сначала понять, что такое желаемое решение. 
   Описание проблемы требует, чтобы мы вывели минимальное значение максимального расстояния между соседними заправочными станциями. 
   Это значение является не чем иным, как неотрицательным двойным значением, поскольку расстояние между любыми соседними станциями не может быть отрицательным, 
   и в общем случае оно должно быть двойного типа. 
   Поэтому наш вариант решения также должен быть неотрицательным двойным значением.

2) Пусть max будет максимальным значением расстояний между любыми соседними станциями без добавления этих дополнительных станций,
  тогда наше желаемое решение должно находиться в диапазоне [0, max]. 
  
  Это связано с тем, что добавление дополнительных станций (и размещение их в правильных положениях) 
  может только уменьшить максимальное расстояние между любыми соседними станциями. 
  
  Поэтому наше пространство поиска будет [0, max] (или верхняя граница должна быть не менее max).

3) Это ключевая часть этого алгоритма проб и ошибок. 
  Таким образом, учитывая потенциальное двойное значение d, как мы можем определить, 
  может ли оно быть минимальным значением максимального расстояния между любыми соседними станциями 
  после добавления K дополнительных станций?

  Если d может быть минимальным значением максимального расстояния между любыми соседними станциями 
  после добавления K дополнительных станций, то следующие два условия должны выполняться одновременно:


  1) Общее количество станций, которое мы можем добавить между всеми соседними станциями, не может превышать K. 
    Другими словами, предположим, что мы добавили станции cnt_i между парой соседних станций (i, i + 1), 
    тогда у нас должна быть сумма (cnt_i) < = К

  2) Для каждой пары соседних станций (i, i + 1) минимальное значение максимального расстояния между соседними станциями
   после добавления дополнительных станций cnt_i не может превышать d. 
   
   Если исходное расстояние между станцией i и i + 1 составляет d_i = stations[i + 1] - station[i], 
   то после добавления дополнительных станций cnt_i минимальное значение максимального расстояния между любыми соседними станциями, 
   которое мы можем получить, составляет d_i / ( cnt_i + 1)
   что достигается путем равномерного размещения этих станций между станциями i и i + 1. 
   Поэтому нам требуется: d_i / (cnt_i + 1) <= d, что эквивалентно cnt_i >= (d_i / d - 1).


*/

const minmaxGasDist = function(stations, k) {
  let lo = 0;
  let hi = 0;

  for (let i = 1; i < stations.length; i++) {
    hi = Math.max(hi, stations[i] - stations[i - 1]);
  }

  while (hi - lo >= 1e-6) {
    // средняя точка
    let mid = (hi + lo) / 2;

    let cnt = 0;

    for (let i = 0; i < stations.length - 1; i++) {
      cnt += Math.ceil((stations[i + 1] - stations[i]) / mid) - 1;
    }

    // отбрасываем левую или правую половину
    if (cnt <= k) {
      hi = mid;
    } else {
      lo = mid;
    }
  }

  return lo;
};

let a = minmaxGasDist([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9);
console.log(a);
