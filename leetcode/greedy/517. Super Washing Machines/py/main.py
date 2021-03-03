class Solution:
    # Time O(N)
    # Space O(1)
    def findMinMoves(self, machines):
        total = sum(machines)
        n = len(machines)

        if total % n != 0:
            return -1

        target = total // n
        total = 0
        ans = 0
        """
            Example: [0, 0, 11, 5] then target = (11 + 5) / 4 = 4

            Global: [-4, -8, -1, 0] where global[2] = 11 - 4 - 8 = -1
            
            Local: [-4, -4, 7. 1] where local[2] = 11 - 4 = 7

            Then the result at each point is a maximum between Global and Local => max(Global, Local) 
            Therefore, need to compare the cumulative sum and the local sum.
        """

        for i in range(n):
            local = machines[i] - target
            total += local
            ans = max(ans, abs(total), local)

        return ans