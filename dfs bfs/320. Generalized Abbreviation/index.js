/*

Write a function to generate the generalized abbreviations of a word. 

Note: The order of the output does not matter.

Example:
  Input: "word"
  Output: ["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]

*/

/*

  Идея такова: для каждого char мы можем сохранить его или сократить его. 

  Чтобы сохранить его, мы добавляем его в ans и возвращаемся по стеку вверх. 
  
  Чтобы сократить его, мы не включаем его в текущем решении, но увеличиваем счетчик, который указывает, сколько символов мы сократили. 
  
  Достигнув конца мы проверяем count если оно больше нуля, мы добавляем число сокращения в общее решение. 

  Дополнение:
    Для каждого вызова helper он либо возвращается без разветвления, либо разветвляется на два рекурсивных вызова. 
    Все эти рекурсивные вызовы образуют полное двоичное дерево рекурсии с 2^n листья и 2^n - 1 внутренние узлы. 
    Для каждого конечного узла требуется O (n) время для преобразования компоновщика в String; 

*/

// Time O(N * 2^N)
// Space O(N)
const generateAbbreviations_II = word => {
  let ans = [];

  helper(0, '', 0);

  return ans;

  function helper(pos, current, count) {
    if (pos == word.length) {
      if (count > 0) current += count;
      ans.push(current);
      return;
    }

    helper(pos + 1, current, count + 1);
    helper(pos + 1, current + (count > 0 ? count : '') + word[pos], 0);
  }
};

// Time O(N * 2^N)
// Space O(N)
const generateAbbreviations_III = word => {
  let ans = [];

  helper(0, '');

  return ans;

  function helper(start, current) {
    for (let i = start; i < word.length; i++) {
      let abbr = i == start ? '' : i - start;

      helper(i + 1, current + abbr + word.substring(i, i + 1));
    }

    current = current + (word.length == start ? '' : word.length - start);

    ans.push(current);
  }
};
