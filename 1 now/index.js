/**
 * @param {string} target
 * @param {string[]} dictionary
 * @return {string}
 */
var minAbbreviation = function(target, dictionary) {
  let res = [];

  helper(0, '', 0);

  res.sort((a, b) => a.length - b.length);

  for (let abbr of res) {
    let found = false;
    for (let x of dictionary) {
      if (validWordAbbreviation(x, abbr)) {
        found = true;
        break;
      }
    }
    if (found == false) return abbr;
  }

  return '';

  function helper(pos, current, count) {
    if (pos == target.length) {
      if (count > 0) current += count;
      res.push(current);
      return;
    }

    helper(pos + 1, current, count + 1);
    helper(pos + 1, current + (count > 0 ? count : '') + target[pos], 0);
  }

  const validWordAbbreviation = (word, abbr) => {
    let j = 0;

    for (let i = 0; i < abbr.length; i++) {
      let num = '';

      if (abbr[i] == 0 && word[i]) return false;

      while (Number.isInteger(+abbr[i])) {
        num += abbr[i];
        i++;
      }

      if (num != '') {
        j += parseInt(num);
      }

      if (abbr[i] != word[j] || i > word.length || j > word.length) {
        return false;
      }
      j++;
    }

    return true;
  };
};
