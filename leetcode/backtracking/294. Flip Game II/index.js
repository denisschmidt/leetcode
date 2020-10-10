/*

You are playing the following Flip Game with your friend: 

Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--". 

The game ends when a person can no longer make a move and therefore the other person will be the winner.

Write a function to determine if the starting player can guarantee a win.

Example:
  Input: s = "++++"
  Output: true 
  Explanation: The starting player can guarantee a win by flipping the middle "++" to become "+--+".

Follow up: Derive your algorithm's runtime complexity.

*/

/*

  Идея состоит в том, чтобы попытаться заменить каждое "++" в текущей строке s на "--" 
  И посмотреть, сможет ли противник выиграть или нет
   
  Если противник не может победить, отлично, мы победим! 
  
  Поэтому мы используем DFS + Memo для решения проблемы.  
  
  На самом деле нам все равно, какой игрок может выиграть за определенную строку в каждом рекурсивном раунде.
  
  Мы заботимся только о том, сможет ли текущий игрок (независимо от того, является ли текущий игрок вами или вашим противником) выиграть или нет.  
  
  После рекурсивного построения дерева dfs мы узнаем условие выигрыша для каждого конечного узла (до сих пор нет)  
  
  Позаботьтесь о том, какой игрок сыграет последний раунд на листовом узле, а затем проследите в обратном порядке.  
  
  Если мы можем найти путь, который возвращает true в самом верху (это условие игрока, которое нас волнует)
  
  Так как мы играем первыми, тогда мы можем гарантировать, что существует способ, которым первый игрок может выиграть

*/
const canWin = function (s) {
  let n = s.length;
  let map = new Map();

  return helper(s);

  function helper(s) {
    if (map.has(s)) return map.get(s);

    if (s == null || s.length <= 1) return false;

    for (let i = 0; i < n - 1; i++) {
      if (s[i] == '+' && s[i + 1] == '+') {
        // Получаем все возможные подстроки для следующего уровня рекурсии.
        let opponent = s.substring(0, i) + '--' + s.substring(i + 2);

        // Как только мы найдем один путь вернемся к корню
        if (!helper(opponent)) {
          map.set(s, true);
          return true;
        }
      }
    }

    // После прохождения всех символов текущей строки, если в текущей строке нет двух последовательных «+»
    // Возвращаем false, поскольку текущий игрок не может выиграть в текущем состоянии строки

    map.set(s, false);

    return false;
  }
};
