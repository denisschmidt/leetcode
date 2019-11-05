/*
Given a string S and a string T, find the minimum window in S which will contain all the characters in T
in complexity O(n).

Example:
  Input: S = "ADOBECODEBANC", T = "ABC"
  Output: "BANC"

Note:
  If there is no such window in S that covers all characters in T, return the empty string "".
  If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
 */

// =============================================================================================================

/*
  For most substring problem,
  we are given a string and need to find a substring of it which satisfy some restrictions.

  A general way is to use a hashmap assisted with two pointers.

 ===============================================================================================================

 Нужно упомянуть одну вещь: когда мы просим найти максимальную подстроку,
 Мы должны обновить максимум после внутреннего цикла while, чтобы гарантировать, что подстрока верна.

 С другой стороны, когда нас просят найти минимальную подстроку
 Мы должны обновить минимум внутри внутреннего цикла while.
 */

const minWindow = (s, t) => {
  let begin = 0,
    end = 0;
  let counter = t.length;
  let minLength = Number.MAX_VALUE;
  let minStartIndex = 0;

  /* initialize the hash map here */
  const map = t.split('').reduce(
    (acc, val) => ({
      ...acc,
      [val]: ++acc[val] || 1,
    }),
    {},
  );

  while (end < s.length) {
    /* modify counter here */
    if (map[s[end]] > 0) {
      counter--;
    }

    // уменьшаем счетчик для символа и передвигаем указатель конца
    map[s[end]]--;
    end++;

    // состояние счетчика
    // when count reaches zero, all chars in t have been matched
    while (counter === 0) {
      // update minLength here if finding minimum !!!!
      if (end - begin < minLength) {
        minLength = end - begin;
        minStartIndex = begin;
      }

      //increase begin to make it invalid/valid again
      map[s[begin]]++;

      // the window has lost a char in t
      if (map[s[begin]] > 0) {
        counter++;
      }

      // minimize the window by advancing the start pointer
      begin++;
    }

    // update maxLength here if finding maximum !!!
  }

  return minLength === Number.MAX_VALUE ? '' : s.substr(minStartIndex, minLength);
};

const s = 'ADOBECODEBANC',
  t = 'ABC';
// const s = 'bbaa', t = 'aba'; // baa
const res = minWindow(s, t);
console.log('===', res);

// ===========================================================================================

const isValid = (s, t) => {
  let index = 0;
  for (let i = 0; i < t.length; i++) {
    index = s.indexOf(t[i]);
    if (index === -1) {
      return false;
    } else {
      s = s.substring(0, index) + s.substring(index + 1);
    }
  }
  return true;
};

/**
 * TIME LIMIT SOLUTION
 *
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow2 = function(s, t) {
  let left = 0,
    right = s.length;
  let newS = '';
  let lastValidLeftIndex = null,
    lastValidRightIndex = null;
  if (s.length < t.length) {
    return '';
  } else if (s === t) {
    return s;
  }
  while (left < right && right >= t.length) {
    newS = s.substring(left, right);
    if (isValid(newS, t)) {
      lastValidLeftIndex = left;
      lastValidRightIndex = right;
      left++;
    } else {
      left--;
      right--;
    }
  }
  return lastValidLeftIndex !== null ? s.substring(lastValidLeftIndex, lastValidRightIndex) : '';
};

const res2 = minWindow2(s, t);
console.log('===', res2);
