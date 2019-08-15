/*
We have two special characters. The first character can be represented by one bit 0. The second character can be represented by two bits (10 or 11).

Now given a string represented by several bits.
Return whether the last character must be a one-bit character or not.
The given string will always end with a zero.

Example 1:
  Input: bits = [1, 0, 0]
  Output: True

Explanation: The only way to decode it is two-bit character and one-bit character. So the last character is one-bit character.

Example 2:
  Input: bits = [1, 1, 1, 0]
  Output: False

Explanation: The only way to decode it is two-bit character and two-bit character. So the last character is NOT one-bit character.

 */

// Time O(N)
// Space O(1)
var isOneBitCharacter = function(bits) {
  if (bits.length === 1) {
    return bits[0] === 0;
  }

  let index = 0;
  for (let i = 0; i < bits.length - 1; i++) {
    if (bits[i] === 1) {
      index = i + 1;
      i++;
    }
  }

  return index !== bits.length - 1;
};
