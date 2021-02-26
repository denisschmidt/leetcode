import heapq


class Solution:
    # Time O(N)
    # Space O(1)
    def canCompleteCircuit(self, gas, cost):
        """
        :type gas: List[int]
        :type cost: List[int]
        :rtype: int
        """
        n = len(gas)

        total = 0
        current = 0
        start = 0

        for i in range(n):
            total += gas[i] - cost[i]
            current += gas[i] - cost[i]

            # If one couldn't get here,
            if current < 0:
                # Pick up the next station as the starting one.
                start = i + 1
                # Start with an empty tank.
                current = 0
        """
        Let's assume that the point k into interval [0, k] < 0

        Then we split the sum on the right side by the starting station and on the left side.

        Therefore, if the total sum > 0 - it's mean that the right side greater than the left side 

        Therefore we will have enough gas to make a circle

        """

        return start if total >= 0 else -1

    # Time O(N^2LogN)
    # Space O(N)
    def canCompleteCircuit_II(self, gas, cost):
        if len(gas) == 1:
            return 0 if gas[0] >= cost[0] else -1

        n = len(gas)

        queue = []

        for i in range(n):
            if gas[i] > cost[i]:
                nextIndex = (i + 1) % n
                nextGas = gas[i] - cost[i] + gas[nextIndex]
                heapq.heappush(queue, (-1, nextGas, nextIndex, i))  # pathLen, gas, nextIndex, targetIndex

        while queue:
            path, currentGas, currentIndex, targetIndex = heapq.heappop(queue)

            if currentIndex == targetIndex:
                return currentIndex

            if currentGas - cost[currentIndex] >= 0:
                nextIndex = (currentIndex + 1) % n
                nextGas = currentGas - cost[currentIndex] + gas[nextIndex]
                heapq.heappush(queue, (path - 1, nextGas, nextIndex, targetIndex))

        return -1

