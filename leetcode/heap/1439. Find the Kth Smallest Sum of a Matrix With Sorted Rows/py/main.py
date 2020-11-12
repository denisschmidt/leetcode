import heapq

class Solution:
    def kthSmallest(self, mat, k):
        heap = []
        n, m = len(mat), len(mat[0])
        
        val = 0
        pairs = [0] * n
        
        for i in range(n):
          val += mat[i][0]
          
        heapq.heappush(heap, (val, pairs))
        
        ans = None
        visited = set()

        while heap and k > 0:
          val, pairs = heapq.heappop(heap)

          for i in range(n):
            y = pairs[i]
            copy = list(pairs)

            if y + 1 < m:
              copy[i] += 1  
              h = str(copy)  
              
              if h not in visited:
                visited.add(h)
                heapq.heappush(heap, (val - mat[i][y] + mat[i][y + 1] , copy))            

          ans = val

          k -= 1  

        return ans

