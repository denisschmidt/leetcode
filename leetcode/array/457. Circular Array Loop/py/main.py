# Time O(N)
# Space O(N)
class Solution:
    def circularArrayLoop(self, nums):
        if not nums: return False

        N = len(nums)
        visited = [False] * N
        stack = [False] * N

        def getNextIndex(i):
          next = nums[i]
          rem = next % N
          nextIdx = rem + i
          
          if nextIdx<0:
              nextIdx = N + nextIdx
          else:
              nextIdx = nextIdx % N
          
          return nextIdx

        def hasCycle(i):
          if visited[i]:
            return False
        
          visited[i] = True
          stack[i] = True

          next = getNextIndex(i)

          if nums[i] * nums[next] > 0 and i != next:
            if stack[next]:
              return True
            
            if not visited[next] and hasCycle(next):
              return True
          
          stack[i] = False
          
          return False

        for i in range(N):
          if not visited[i] and hasCycle(i):
            print(i)
            return True

        return False
