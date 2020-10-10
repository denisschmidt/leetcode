/*

An abbreviation of a word follows the form <first letter><number><last letter>. 

Below are some examples of word abbreviations:
  a) it                      --> it    (no abbreviation)

      1
      ↓
  b) d|o|g                   --> d1g

                1    1  1
      1---5----0----5--8
      ↓   ↓    ↓    ↓  ↓    
  c) i|nternationalizatio|n  --> i18n

                1
      1---5----0
      ↓   ↓    ↓
  d) l|ocalizatio|n          --> l10n

Additionally for any string s of size less than or equal to 2 their abbreviation is the same string s.
Find whether its abbreviation is unique in the dictionary. 

A word's abbreviation is called unique if any of the following conditions is met:

There is no word in dictionary such that their abbreviation is equal to the abbreviation of word.
Else, for all words in dictionary such that their abbreviation is equal to the abbreviation of word those words are equal to word.
 

Example 1:
  Input
    ["ValidWordAbbr","isUnique","isUnique","isUnique","isUnique"]
    [[["deer","door","cake","card"]],["dear"],["cart"],["cane"],["make"]]
  Output [null,false,true,false,true]

  Explanation
    ValidWordAbbr validWordAbbr = new ValidWordAbbr(["deer", "door", "cake", "card"]);
    validWordAbbr.isUnique("dear"); // return False
    validWordAbbr.isUnique("cart"); // return True
    validWordAbbr.isUnique("cane"); // return False
    validWordAbbr.isUnique("make"); // return True
  
Constraints:
  Each word will only consist of lowercase English characters.

*/

// Time O(N)
// Space O(N)
class ValidWordAbbr {
  constructor(dictionary) {
    let map = new Map();

    for (let word of dictionary) {
      let abbr = this.getAbbreviation(word);

      if (!map.has(abbr)) {
        map.set(abbr, new Set());
      }

      map.get(abbr).add(word);
    }

    this.map = map;
  }

  getAbbreviation(word) {
    if (word.length <= 2) return word;
    return word[0] + (word.length - 2) + word[word.length - 1];
  }

  // Time O(1)
  isUnique(word) {
    let abbr = this.getAbbreviation(word);
    let list = this.map.get(abbr);

    return !list || !list.size || (list.size == 1 && list.has(word));
  }
}
