/*

443. String Compression


Given an array of characters, compress it in-place.

The length after compression must always be smaller than or equal to the original array.

Every element of the array should be a character (not int) of length 1.

After you are done modifying the input array in-place, return the new length of the array.

Follow up:
Could you solve it using only O(1) extra space?

Example 1:
  Input: ["a","a","b","b","c","c","c"]
  Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
  Explanation: "aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".


Example 2:
  Input: ["a"]
  Output: Return 1, and the first 1 characters of the input array should be: ["a"]
  Explanation: Nothing is replaced.

Example 3:
  Input: ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
  Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
  Explanation: Since the character "a" does not repeat, it is not compressed. "bbbbbbbbbbbb" is replaced by "b12".
  Notice each digit has it's own entry in the array.

  Time: O(n)
  Space: O(1)
 */
const compress = function(chars) {
  let left = 0;
  let right = 0;
  while (right < chars.length) {
    const currentChar = chars[right];
    let count = 0;
    while (right < chars.length && chars[right] === currentChar) {
      count++;
      right++;
    }
    chars[left++] = currentChar;
    if (count !== 1) {
      const arr = ('' + count).split('');
      for (let i = 0; i < arr.length; i++) {
        chars[left++] = arr[i];
      }
    }
  }
  chars.splice(left);
  return left;
};

const res = compress(['a', 'a', 'a', 'b']);
console.log('===', res);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const compress2 = function(chars) {
  const map = new Map();
  const ans = [];

  for (let i = 0; i < chars.length; i++) {
    let char = chars[i];
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }

  for (let [key, value] of map) {
    if (value < 10) {
      if (value > 1) {
        ans.push(key, value);
      } else {
        ans.push(key);
      }
    } else {
      const arr = value.toString().split('');
      ans.push(key);
      arr.forEach(v => {
        ans.push(v);
      });
    }
  }
  return ans;
};

const res2 = compress2(['a', 'a', 'b', 'b', 'c', 'c', 'c']);
// console.log('===', res);
