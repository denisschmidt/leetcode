# Time O(N * 2^N)
# Space O(2^N)
class Solution:
    def canPartitionKSubsets(self, nums, k):
        totalSum = sum(nums)
        n = len(nums)

        if totalSum % k != 0 or k == 0:
            return False
        
        used = [False] * n
        
        def dfs(index, currSum, cnt, target):
            # first of all check all valid results
            if cnt == k:
                return True
            
            # if we found a subset with sum equal target
            # start search from the beginning
            if currSum == target:
                return dfs(0, 0, cnt + 1, target)
            
            if index >= n or currSum > target:
                return False

            # search a new subset
            for i in range(index, n):
                if used[i]:
                    continue

                used[i] = True
                ans = dfs(i + 1, currSum + nums[i], cnt, target)
                used[i] = False
                
                if ans:
                    return True
                
            return False

        return dfs(0, 0, 0, totalSum / k)
            
