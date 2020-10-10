/*
Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
  Given nums = [1,1,1,2,2,3],

  Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
  It doesn't matter what you leave beyond the returned length.

Example 2:
  Given nums = [1,1,1,1,2,3,3],
  Your function should return length = 7, with the first seven elements of nums being modified to 0, 0, 1, 1, 2, 3 and 3 respectively.

It doesn't matter what values are set beyond the returned length.
Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}

Нам нужна переменная count, чтобы сохранить количество появлений дублированного элемента,
если мы встретим другой элемент, просто установим счетчик в 1,
если мы встретим дублированный элемент, нам нужно проверить этот счетчик, если он уже к, то нам нужно пропустить это,
в противном случае мы можем сохранить этот элемент.

 */

const removeDuplicates = nums => {
  return helper(2);

  function helper(k) {
    const n = nums.length;

    if (n <= k) return n;

    let i = 1;
    let j = 1;
    let count = 1;

    while (j < n) {
      if (nums[j] !== nums[j - 1]) {
        count = 1;
        nums[i] = nums[j];
        i++;
      } else {
        if (count < k) {
          nums[i] = nums[j];
          i++;
          count++;
        }
      }

      j++;
    }

    console.log(nums);

    return i;
  }
};

// Time O(N^2)
// Space O(1)
const removeDuplicates2 = nums => {
  if (nums.length === 0) return nums.length;
  let count = 1;
  const n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      count++;
    } else {
      if (count > 2) {
        nums.splice(i + 1 - (count - 2), count - 2);
        i = i - count - 2 + 1;
      }

      count = 1;
    }
  }

  nums.splice(n - (count - 2), count - 2);

  return nums;
};
