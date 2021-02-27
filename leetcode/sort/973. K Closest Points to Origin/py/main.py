import heapq


class Solution:
    # Time O(NLogK)
    # Space O(K)
    def kClosest(self, points: List[List[int]], K: int) -> List[List[int]]:
        queue = []

        for x, y in points:
            if len(queue) < K:
                heapq.heappush(queue, [-(x * x + y * y), [x, y]])
            else:
                heapq.heappushpop(queue, [-(x * x + y * y), [x, y]])

        return [pair for val, pair in queue]
