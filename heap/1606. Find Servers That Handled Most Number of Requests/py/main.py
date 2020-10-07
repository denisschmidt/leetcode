import heapq

# Solution using three heaps. 

# First heap is used to quickly free up servers. 

# Then we split the servers to those that come after the currentServerId 
# And those that come before the currentServerId 

class Solution:
    def busiestServers(self, k: int, arrival, load):
        runningJobs = [] # heap (time, node)
        after = []  # heap (nodes) free serverIds after current server
        before = list(range(k)) # heap (nodes) free serverIds before current server

        requestHandler = [0] * k

        for i, (startTime, duration) in enumerate(zip(arrival, load)):
          currentServerId = i % k

          if currentServerId == 0:
            after = before
            before = []

          while runningJobs and runningJobs[0][0] <= startTime:
            serverId = heapq.heappop(runningJobs)[1]

            if serverId < currentServerId:
              heapq.heappush(before, serverId)
            else:
              heapq.heappush(after, serverId)

          queue = after if after else before

          if not queue:
            continue

          usingServer = heapq.heappop(queue)

          requestHandler[usingServer] += 1

          heapq.heappush(runningJobs, (startTime + duration, usingServer))

        maxRequests = max(requestHandler) 

        ans = []

        for i in range(k):
          if requestHandler[i] == maxRequests:
            ans.append(i)

        return ans

