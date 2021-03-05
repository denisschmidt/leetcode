import collections
import heapq


class Solution:

    # Time O(N)
    # Space O(1) to keep the array frequencies of 26 elements.
    def leastInterval(self, tasks, n):
        frequencies = [0] * 26

        for t in tasks:
            frequencies[ord(t) - ord('A')] += 1

        frequencies.sort()

        f_max = frequencies.pop()
        """
        Maximum possible number of idle slots is defined by the frequency of the most frequent task

        Example: A,B,A,A,B,C,A,A,  n = 2

        free_idle_time = (5 - 1) * 2 = 8 

        """

        free_idle_time = (f_max - 1) * n

        while frequencies and free_idle_time > 0:
            free_idle_time -= min(f_max - 1, frequencies.pop())

        return free_idle_time + len(tasks)

    # Time O(N + K * Log(26)) where K max freq
    # Space O(26)
    def leastInterval_II(self, tasks, n):
        mapping = {}
        heap, temp = [], []
        res = 0

        for t in tasks:
            mapping[t] = mapping.get(t, 0) + 1

        for k in mapping:
            heapq.heappush(heap, -1 * mapping[k])

        while heap:
            i = 0

            while i <= n and heap:
                freq = heapq.heappop(heap) * -1

                if freq - 1 > 0:
                    temp.append((freq - 1) * -1)

                if not heap and temp:
                    res += n - i + 1
                    break

                i += 1
                res += 1

            while temp:
                heapq.heappush(heap, temp.pop())

        return res
