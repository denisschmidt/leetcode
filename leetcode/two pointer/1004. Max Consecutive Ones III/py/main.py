class Solution:
    # Time O(N)
    # Space O(1)
    def longestOnes(self, A, K):
        n = len(A)
        start, end = 0, 0
        max_length = 0
        cnt = 0

        while end < n:
            if A[end] == 0:
                cnt += 1
            end += 1

            while cnt > K:
                if A[start] == 0:
                    cnt -= 1
                start += 1

            if max_length < end - start:
                max_length = end - start

        return max_length

    # Time O(N^2)
    # Space O(1)
    def longestOnes_II(self, A, K):
        n = len(A)
        ans = 0

        for i in range(n):
            cnt = K

            if A[i] == 0:
                cnt -= 1

            j = i + 1

            while j < n and cnt >= 0:
                if A[j] == 0:
                    cnt -= 1
                j += 1

            if cnt < 0:
                j -= 1

            ans = max(ans, j - i)

        return ans