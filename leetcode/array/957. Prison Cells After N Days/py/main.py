class Solution:
    def prisonAfterNDays(self, cells, N):
        seen = set();
        hasCycle = False
        step = 0

        for i in range(N):
          next = self.getNextState(cells)
          key = str(next)

          if key in seen:
            hasCycle = True
            break

          seen.add(key)
          step += 1
          cells = next

        if hasCycle:
          return self.prisonAfterNDays(cells, N % step)
        return cells    

    def getNextState(self, state):
      next_state = [0] * 8
      for i in range(1, len(state) - 1):
        if state[i - 1] == state[i + 1]:
          next_state[i] = 1
        else:
          next_state[i] = 0  
      return  next_state