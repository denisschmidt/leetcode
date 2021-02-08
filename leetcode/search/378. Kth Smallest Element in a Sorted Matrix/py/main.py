import heapq


class Solution:
    def kthSmallest(self, matrix, k):
        n, m = len(matrix), len(matrix[0])
        lo, hi = matrix[0][0], matrix[n - 1][m - 1]

        def calc(value):
            i, cnt = n - 1, 0

            while i >= 0:
                j = m - 1
                while j >= 0 and matrix[i][j] > value:
                    j -= 1
                cnt += j + 1
                i -= 1

            return cnt

        while lo < hi:
            value = lo + ((hi - lo) // 2)

            # count number into the matrix less then the current value
            cnt_less = calc(value)

            if cnt_less < k:
                # need increase the next value
                lo = value + 1
            else:
                # need decrease the next value
                hi = value

        return lo

    import heapq

    def kthSmallest_II(self, matrix, k):
        n, m = len(matrix), len(matrix[0])
        heap = []
        heapq.heappush(heap, [matrix[0][0], 0, 0])

        while heap:
            val, i, j = heapq.heappop(heap)

            if k == 1:
                return val

            if i + 1 < n and matrix[i + 1][j] != None:
                heapq.heappush(heap, [matrix[i + 1][j], i + 1, j])
                matrix[i + 1][j] = None

            if j + 1 < m and matrix[i][j + 1] != None:
                heapq.heappush(heap, [matrix[i][j + 1], i, j + 1])
                matrix[i][j + 1] = None

            k -= 1

        return -1
