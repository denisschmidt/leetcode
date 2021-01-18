# Time O(N * 2^N)
# Space O(2^N)
class Solution:
    def canPartitionKSubsets(self, nums, k):
        total_sum = sum(nums)
        N = len(nums)
        used = [False] * N

        if total_sum % k != 0:
            return False

        def dfs(index, cur_sum, target_sum, k):
            if k == 0:
                return True
            
            if cur_sum == target_sum:
                return dfs(0, 0, target_sum, k - 1)

            if index >= N or cur_sum > target_sum:
                return False
            
            res = False

            # try to take the current num if it possible
            if not used[index]:
                used[index] = True
                
                res = dfs(index + 1, cur_sum + nums[index], target_sum, k)
                
                # backtracking
                used[index] = False
            
            # we already find the answer or need continue the search
            return res or dfs(index + 1, cur_sum, target_sum, k)

        return dfs(0, 0, total_sum // k, k)

    def canPartitionKSubsets_II(self, nums, k):
        total_sum = sum(nums)
        n = len(nums)

        if total_sum % k != 0 or k == 0:
            return False
        
        used = [False] * n
        
        def dfs(index, cur_sum, target_sum, k):
            # first of all check all valid results
            if k == 0:
                return True

            # if we found a subset with sum equal target
            # start a new search from the beginning
            if cur_sum == target_sum:
                return dfs(0, 0, target_sum, k - 1)
            
            if index >= len(nums):
                return False

            # search a new subset
            for i in range(index, len(nums)):
                if used[i]:
                    continue

                if cur_sum + nums[i] <= target_sum:
                    used[i] = True

                    res = dfs(i + 1, cur_sum + nums[i], target_sum, k)

                    # backtracking
                    used[i] = False

                    if res:
                        return True
            
            return False

        return dfs(0, 0, 0, total_sum / k)
            
