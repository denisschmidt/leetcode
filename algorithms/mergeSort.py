# Time O(N * LogN)
# Space O(N)
class Solution:
    def sortArray(self, nums):
        def merge_sort(nums):
          if len(nums) == 1:
            return nums

          mid = len(nums) // 2

          left = merge_sort(nums[:mid])
          right = merge_sort(nums[mid:])

          return self.merge(left, right)

        return merge_sort(nums)

    def merge(self, left, right):
      left_index, right_index = 0, 0

      n, m = len(left), len(right)

      sorted_array = [] * (n + m)

      while left_index < n and right_index < m:
        if left[left_index] < right[right_index]:
          sorted_array.append(left[left_index])
          left_index += 1
        else:
          sorted_array.append(right[right_index])
          right_index += 1
      
      while left_index < n:
        sorted_array.append(left[left_index])
        left_index += 1

      while right_index < m:
        sorted_array.append(right[right_index])
        right_index += 1

      return sorted_array
