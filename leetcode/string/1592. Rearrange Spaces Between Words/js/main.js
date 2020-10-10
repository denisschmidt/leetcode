// Time O(N)
// Space O(N)
const reorderSpaces = text => {
  let totalWordsLen = 0;
  let textArray = text.split(' ');
  let words = textArray.filter(w => w != '');
  words.forEach(w => (totalWordsLen += w.length));

  let totalSpaces = text.length - totalWordsLen;

  if (totalSpaces == 0) {
    return words.join('');
  }

  if (words.length == 1 && totalSpaces > 0) {
    return words.join('') + getSpaces(totalSpaces);
  }

  let betweenSpaces = Math.floor(totalSpaces / (words.length - 1));

  return words.join(getSpaces(betweenSpaces)) + getSpaces(totalSpaces - betweenSpaces * (words.length - 1));
};

function getSpaces(len) {
  let separator = '';
  for (let i = 0; i < len; i++) separator += ' ';
  return separator;
}
