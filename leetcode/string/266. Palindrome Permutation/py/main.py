class Solution:
    # Time O(N)
    # Space O(1)
    def canPermutePalindrome(self, s: str) -> bool:
        counter = Counter(s)
        cnt_odd = 0

        for k in counter:
            if counter[k] % 2 != 0:
                if cnt_odd > 0: return False
                cnt_odd += 1
        return True
