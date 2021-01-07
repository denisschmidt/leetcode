class Solution:
    # Time O(N)
    # Space O(N)
    def containsNearbyDuplicate(self, nums, k):
        dict, n = {}, len(nums)

        for i in range(n):
            if nums[i] not in dict:
                dict[nums[i]] = i
            else:
                if i - dict[nums[i]] <= k:
                    return True
                dict[nums[i]] = i
                
        return False