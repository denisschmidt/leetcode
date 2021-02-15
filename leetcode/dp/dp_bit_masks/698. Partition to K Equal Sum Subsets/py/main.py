# Time O(N * 2^N)
# Space O(2^N)
class Solution:
    # Dp on the bit masks
    # Time O(2^N * N)
    def canPartitionKSubsets(self, nums, k):
        total_sum = sum(nums)
        n = len(nums)

        if total_sum % k != 0:
            return False

        remainingSum = total_sum // k
        
        # isReachable[mask] - if we can split mask into several subsets (buckets):
        # All of them except one should be full (i.e. their sum is equal to required sum)
        # and the last bucket should not exceed the required sum.
        isReachable = [0] * (1 << n)

        # The sum of this last subset described above.
        remainingSum = [0] * (1 << n)

        # we always can get zero mask
        isReachable[0] = True

        """ 
             1  0  1  1  0  1  1
            [4, 3, 2, 3, 5, 2, 1]

            Where 4 + 1 = 5, 2 + 3 = 5 and 2 <= requiredSum, therefore we can add the new number to our mask.

        """

        # Iterate over the masks where each mask - it's any subset  
        for mask in range(1, 1 << n):
            
            for i in range(n):
                # If i-th element is present in the mask 
                # and everything except of i-th element can be split into subsets as described above
                # and the i-th element can be placed in the last not full subset, without exceeding the required value.
                
                # isReachable[mask ^ (1 << i)] - if the mask without i-th element equal TRUE
                # remainingSum[mask ^ (1 << i)] - i-th element can be placed in the last bucket without exceeding the required value.
                if (mask & (1 << i)) != 0 and isReachable[mask ^ (1 << i)] and remainingSum[mask ^ (1 << i)] + nums[i] <= remainingSum:
        
                    isReachable[mask] = True
                    
                    # We need to add % requiredSubSum so that if we filled the subset completely 
                    # the new remaining sum is zero.
                    remainingSum[mask] = (remainingSum[mask ^ (1 << i)] + nums[i]) % remainingSum

        return isReachable[(1 << n) - 1]


    def canPartitionKSubsets_II(self, nums, k):
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

    def canPartitionKSubsets_III(self, nums, k):
        totalSum = sum(nums)
        n = len(nums)
        used = [False] * n

        if totalSum % k != 0:
            return False

        def dfs(index, currSum, target, cntSubSets):
            # first of all check all valid results
            if cntSubSets == k:
                return True

            # if we found a subset with sum equal target
            # start a new search from the beginning
            if currSum == target:
                return dfs(0, 0, target, cntSubSets + 1)

            # search a new subset
            for i in range(index, n):
                if used[i]: continue

                if currSum + nums[i] <= target:
                    used[i] = True
                    res = dfs(i + 1, currSum + nums[i], target, cntSubSets)
                    used[i] = False

                    if res:
                        return True

            return False

        return dfs(0, 0, totalSum // k, 0)
