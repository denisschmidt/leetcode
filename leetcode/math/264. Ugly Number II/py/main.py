import heapq

# Time O(1)
# Space O(1690*3 + 1690*2)
class Solution:
    def nthUglyNumber(self, n: int) -> int:
        heap = []
        res = []
        seen = set()

        heapq.heappush(heap, 1)

        for _ in range(1690):
          curr_ugly = heapq.heappop(heap)
          
          res.append(curr_ugly)

          for i in [2,3,5]:
            new_urly = i * curr_ugly

            if new_urly not in seen:
              seen.add(new_urly)
              heapq.heappush(heap, new_urly)

        return res[n - 1]
