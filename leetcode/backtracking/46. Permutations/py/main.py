class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
      def dfs(comb):
        if len(comb) == len(nums):
          res.append(list(comb))
          return

        for i in range(len(nums)):
          if visited[i]:
            continue
          visited[i] = True
          comb.append(nums[i])
          dfs(comb)
          visited[i] = False
          comb.pop()
      res = []
      visited = [False] * len(nums)
      dfs([])

      return res  

class Solution_II:
  def permute(self, nums):
    import itertools
    res = []

    for p in itertools.permutations(nums):
      res.append(list(p))
    return res  