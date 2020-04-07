/*
  Knuth–Morris–Pratt(KMP) Pattern Matching(Substring Search)

  Time O(N + M)

  Prefix array building. 
  
  The pattern equal ['a c a c a b a c a c a b a c a c a c']

  Массив lps в каждой точке содержит саммый длинный прификс и суффикс !!!!

  Create two pointers index and i 

  1) If pattern[index] == pattern[i]  
    Detail explanation: 
      'aca' index = 0  and i = 2 
        This means that the substring 'aca' there is suffix of length 1 
        And we save this information in array lps[2] = 0 + 1; 

      'acac' index = 1 and i = 3 
        This means is in the substring 'acac' there is suffix of length 2 which is also the prefix 'ac' 'ac'
        And we save this information in array lps[3] = 1 + 1; 


  2) If pattern[index] != pattern[i]
    Detail explanation:                a  c  a  c   0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17
      'acacab' index = 3 and i = 5 [0, 0, 1, 2, 3] 'a c a c a b a c a c a  b  a  c  a  c  a  c'

      We go back one prev = index - 1

      Find this prev index in array
      
      And then jump index to this point then index = 1

      Why did we do that? 

      Because that gives us the next highest substring which is also prefix and suffix.  
      
      Then index = 1, i = 5, prefix[0] = a, suffix[4] = a

*/

function calcPrefixAndSuffixPattern(pattern) {
  let lps = Array(pattern.length).fill(0);

  let index = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] == pattern[index]) {
      lps[i] = index + 1;
      i++;
      index++;
    } else {
      if (index !== 0) {
        index = lps[index - 1];
      } else {
        // If index == 0
        lps[i] = 0;
        i++;
      }
    }
  }

  return lps;
}

function KMP(text, pattern) {
  let lps = calcPrefixAndSuffixPattern(pattern);

  let i = 0;
  let j = 0;

  while (i < text.length && j < pattern.length) {
    if (text[i] == pattern[j]) {
      i++;
      j++;
    } else {
      console.log(text[i], pattern[j], j, lps);

      if (j != 0) {
        // text[i] = d  pattern[j] = y
        // prefix = suffix = 'abc' нет смысла рассчитывать вхождение 'abc' снова
        // Поэтому мы берем точку j и получает новую точку с которой начинаем поиск в нашем паттерне
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return j == pattern.length;
}

KMP('abcxabcdabcdabcy', 'abcdabcy');
