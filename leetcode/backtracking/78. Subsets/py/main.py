class Solution:
    def subsets(self, nums):
        res = []
        
        def dfs(index = 0, comb = []):
            res.append(comb[:])
            
            for i in range(index, len(nums)):
                comb.append(nums[i]);
                dfs(i + 1, comb)
                comb.pop()
                
        dfs()
        
        return res
        