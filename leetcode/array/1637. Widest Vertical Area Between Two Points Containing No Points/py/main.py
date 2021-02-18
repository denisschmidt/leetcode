class Solution:
    # Time O(NLogN)
    # Space O(N)
    def maxWidthOfVerticalArea(self, points):
        points.sort()
        n = len(points)
        res = 0

        for i in range(n - 1):
            res = max(res, points[i + 1][0] - points[i][0])

        return res