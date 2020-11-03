# Time O(N)
# Space O(N)
class Solution:
    def furthestBuilding(self, heights: List[int], bricks: int, ladders: int) -> int:
        memo = {}
        
        def dfs(index, bricks, ladders):
            if index == len(heights) - 1:
                return 0
            
            if index in memo:
                return memo[index]
            
            res = 0
            
            if heights[index] >= heights[index + 1]:
                res = max(res, 1 + dfs(index + 1, bricks, ladders))
            else:
                if heights[index + 1] > heights[index]:
                    if heights[index + 1] - heights[index] <= bricks:
                        d = heights[index + 1] - heights[index]
                        res = max(res, 1 + dfs(index + 1, bricks - d, ladders))
                    elif ladders > 0:
                        res = max(res, 1 + dfs(index + 1, bricks, ladders - 1))

            memo[index] = res;
            
            return memo[index]
        
        return dfs(0, bricks, ladders)