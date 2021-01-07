
class Solution:
    # Time O(NLogK) in we have a bst
    # Space O(K)
    def containsNearbyAlmostDuplicate_II(self, nums, k, t):
        sorted_list = [] # maintain a sliding window with a length equals k
        n = len(nums)

        def search(target):
            lo, hi = 0, len(sorted_list) - 1

            while lo < hi:
                mid = lo + ((hi - lo) // 2)

                if sorted_list[mid][0] <= target:
                    lo = mid + 1
                else:
                    hi = mid

            if lo < len(sorted_list) and sorted_list[lo][0] < target:
                return lo + 1
            
            return lo

        for i in range(n):
            j = search(nums[i]) # get position to insert

            if j < len(sorted_list) and sorted_list[j][0] - nums[i] <= t and abs(sorted_list[j][1] - i) <= k:
                return True 
                
            if j - 1 >= 0 and nums[i] - sorted_list[j - 1][0] <= t and abs(sorted_list[j-1][1] - i) <= k:
                return True 

            sorted_list.insert(j, [nums[i], i]) # insert value at the new position

            # If size of the sliding window is full 
            # We need to remove element in the array which is outside the sliding window
            if len(sorted_list) == k + 1: 
                sorted_list.remove([nums[i - k], i - k])

        return False

        