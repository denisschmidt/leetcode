// Origin idea https://leetcode.com/problems/valid-triangle-number/discuss/128135/A-similar-O(n2)-solution-to-3-Sum

// Three pointers (from the right to the left)

// Time O(N^2)
// Space O(1)
const triangleNumber = nums => {
  let ans = 0;
  let n = nums.length;
  nums.sort((a, b) => a - b);

  for (let fixedRightPointer = n - 1; fixedRightPointer > 1; fixedRightPointer--) {
    // fixedRightPointer - it's a fixed right border

    let start = 0;
    let end = i - 1;

    // Scan the range [start, end] and inc start or dec right window's border
    // When we complite the scan inc fixedRightPointer and start new range search
    while (start < end) {
      if (nums[start] + nums[end] > nums[fixedRightPointer]) {
        ans += end - start;
        end -= 1;
      } else {
        start += 1;
      }
    }
  }

  return ans;
};
