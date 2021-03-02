class Solution:
    # Time O(N)
    # Space O(1)
    def findMinMoves(self, machines):
        total = sum(machines)
        n = len(machines)

        if total % n != 0:
            return -1

        target = total // n
        current = 0
        ans = 0

        for i in range(n):
            current += machines[i] - target
            ans = max(ans, abs(current))
            print(current)
        return ans