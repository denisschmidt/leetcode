class Solution:
    # Time O(N)
    # Space O(1)
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        i = -1  # index 0
        n = len(nums)

        for idx, v in enumerate(nums):
            if v == 0:
                i = idx
                break

        if i + 1 >= n or i == -1:
            return

        j = i + 1
        while j < n:
            if nums[i] != nums[j]:
                nums[i], nums[j] = nums[j], nums[i]
                i += 1
                j += 1
            else:
                j += 1
