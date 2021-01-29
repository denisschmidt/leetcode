import heapq


class Solution:
    # Time O(N*M*LogK)
    # Space O(K)
    def kthLargestValue(self, matrix, k):
        n, m = len(matrix), len(matrix[0])
        pq = []

        for i in range(n):
            prefix = [0] * m

            for j in range(m):
                if j == 0:
                    prefix[0] = matrix[i][j]
                else:
                    prefix[j] = prefix[j - 1] ^ matrix[i][j]

                matrix[i][j] = matrix[i -
                                      1][j] ^ prefix[j] if i > 0 else prefix[j]

                if len(pq) < k:
                    heapq.heappush(pq, matrix[i][j])
                else:
                    heapq.heappushpop(pq, matrix[i][j])

        return pq[0] # sorted(all_list)[-k]