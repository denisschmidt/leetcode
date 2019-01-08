/*

 Longest Substring with At Most Two Distinct Characters

 */


const lengthOfLongestSubstringTwoDistinct = (s) => {
  let begin = 0, end = 0, map = {}, counter = 0, max = 0;

  for (let h = 0; h < 26; h++) {
    map[String.fromCharCode(h + 97)] = 0;
  };

  while (end < s.length) {
    if (map[s[end]] === 0) {
      counter++;
    }
    map[s[end]]++;
    end++;
    while (counter > 2) {
      if (map[s[begin]] === 1) {
        counter--;
     }
      map[s[begin]]--;
      begin++;
    }
    max = Math.max(max, end - begin);
  }
  return max;
};

const res = lengthOfLongestSubstringTwoDistinct('aaaaabc');
console.log('---', res);
