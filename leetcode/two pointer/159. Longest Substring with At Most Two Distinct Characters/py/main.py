class Solution:
    def lengthOfLongestSubstringTwoDistinct(self, s: str) -> int:
        mapping = {}
        k = 0
        start, end = 0, 0
        n = len(s)
        startIndex = 0
        maxLen = 0
        
        for ch in s:
            mapping[ch] = 0

        while end < n:
            if mapping[s[end]] == 0:
                k += 1
                
            mapping[s[end]] += 1    
            end += 1

            while k >= 3:
                if mapping[s[start]] == 1:
                    k -= 1

                mapping[s[start]] -= 1
                start += 1
            
            maxLen = max(maxLen, end - start)
        
        return maxLen