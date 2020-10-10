class Solution:
    def arrayNesting(self, nums: List[int]) -> int:
      res, visited = 0, [0] * len(nums)
      
      for i in nums:
        cnt, j = 0, i

        while not visited[j]:
          visited[j], cnt, j = 1, cnt + 1, nums[j]

        res = max(res, cnt)

      return res     