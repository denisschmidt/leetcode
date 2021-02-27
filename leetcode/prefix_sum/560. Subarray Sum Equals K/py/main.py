class Solution:
    # Time O(N)
    # Space O(N)
    def subarraySum(self, nums: List[int], k: int) -> int:
        mapping = {0: 1}
        current = 0
        n = len(nums)
        ans = 0

        for i in range(n):
            current += nums[i]

            if current - k in mapping:
                ans += mapping.get(current - k)

            mapping[current] = mapping.get(current, 0) + 1

        return ans
