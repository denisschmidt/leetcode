import heapq 

class Solution:
    def assignBikes(self, workers, bikes):
      dist = []
      
      for i, worker in enumerate(workers):
        dist.append([])

        for j, bike in enumerate(bikes):
          d = self.getDist(worker, bike)
          dist[-1].append((d, i, j))
        
        dist[-1].sort(reverse=True)

      ans = [None] * len(workers)
      used_bikes = set()
      cnt = 0

      queue = [dist[i].pop() for i in range(len(workers))]

      heapq.heapify(queue)

      while cnt < len(workers):
        _, workerIndex, bikeIndex = heapq.heappop(queue)

        if bikeIndex not in used_bikes:
          ans[workerIndex] = bikeIndex
          used_bikes.add(bikeIndex)
          cnt += 1  
        else:
          heapq.heappush(queue, dist[workerIndex].pop())  

      return ans      

    def getDist(self, bike, worker):
      return abs(bike[0] - worker[0]) + abs(bike[1] - worker[1])
