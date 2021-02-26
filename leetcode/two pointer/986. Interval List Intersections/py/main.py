class Solution:
    # Time O(N + M) where M, NM,N are the lengths of A and B respectively.
    # Space O(N + M)
    def intervalIntersection(self, A: List[List[int]],
                             B: List[List[int]]) -> List[List[int]]:
        i, j = 0, 0
        ans = []

        while i < len(A) and j < len(B):
            a_start, a_end = A[i]
            b_start, b_end = B[j]

            start, end = max(a_start, b_start), min(a_end, b_end)

            if start <= end:
                ans.append([start, end])

            if a_end < b_end:
                i += 1
            else:
                j += 1

        return ans
