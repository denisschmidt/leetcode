class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        if len(s1) + len(s2) != len(s3):
            return False

        if len(s1) == 0 or len(s2) == 0:
            return s1 == s3 or s2 == s3

        dp = [[None] * len(s2) for _ in range(len(s1))]
        
        def dfs(s_index1, s_index2, s_index3):
            if s_index1 >= len(s1):
                return s2[s_index2:] == s3[s_index3:]

            if s_index2 >= len(s2):
                return s1[s_index1:] == s3[s_index3:]
            
            if dp[s_index1][s_index2] != None:
                return dp[s_index1][s_index2]

            if (s1[s_index1] == s3[s_index3] and dfs(s_index1 + 1, s_index2, s_index3 + 1)) or (
                s2[s_index2] == s3[s_index3] and dfs(s_index1, s_index2 + 1, s_index3 + 1)
            ):
                dp[s_index1][s_index2] = True
                return True

            dp[s_index1][s_index2] = False
            return False

        return dfs(0, 0, 0)
