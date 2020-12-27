import heapq
import collections

class Solution:
    def findCheapestPrice(self, n, flights, start, end, K):
        queue = collections.deque()
        adjList = collections.defaultdict(list)
        distance, ans = {}, float('inf')

        for u,v,w in flights:
          adjList[u].append((v, w))

        # point stops
        queue.append([start, 0])
        distance[start, 0] = 0

        while queue:
          u, stops = queue.popleft()

          if u == end:
            ans = min(ans, distance[u, stops])

          if stops > K:
            continue

          for v, w in adjList[u]:
            if stops + 1 > K and v != end:
              continue
            
            nextDist = distance[u, stops] + w
            
            if (v, stops + 1) not in distance or distance[v, stops + 1] > nextDist:
              distance[v, stops + 1] = nextDist
              queue.append([v, stops + 1])

        return -1 if ans == float('inf') else ans