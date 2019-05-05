/*
Given an arbitrary ransom note string and another string containing letters from all the magazines,
write a function that will return true if the ransom note can be constructed from the magazines ;
otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  if (ransomNote.length > magazine.length) {
    return false;
  }
  const ransomNoteArr = ransomNote.split('');
  const oldMagazineLength = magazine.length;
  ransomNoteArr.forEach(function(item) {
    magazine = magazine.replace(item, '');
  });

  return oldMagazineLength === magazine.length + ransomNoteArr.length;
};

const res = canConstruct('aa', 'aab');

console.log('---', res);
