import collections


class Solution:
    # There are N-1 pairs of adjacent words, and only one edge can be generated from each pair
    # There are at most N - 1 edges.
    # The number of vertices is simply V; the number of unique letters.

    # Time O(V + E)
    # Space O(V + E) => E in the worst case is min(V^2, N)
    def alienOrder(self, words):
        graph = collections.defaultdict(list)
        indegree = {}
        n = len(words)

        for word in words:
            for j in range(len(word)):
                indegree[word[j]] = 0

        for i in range(n - 1):
            word1 = words[i]
            word2 = words[i + 1]
            min_length = min(len(word1), len(word2))
            j = 0
            while j < min_length:
                if word1[j] not in indegree:
                    indegree[word1[j]] = 0

                if word2[j] not in indegree:
                    indegree[word2[j]] = 0

                if word1[j] != word2[j]:
                    indegree[word2[j]] += 1
                    graph[word1[j]].append(word2[j])
                    break
                j += 1

            if j == min_length and len(word1) > len(word2) and word1[
                    j - 1] == word2[j - 1]:
                return ''

        items = []
        queue = collections.deque([ch for ch in indegree if indegree[ch] == 0])

        while queue:
            u = queue.popleft()

            items.append(u)

            for v in graph[u]:
                indegree[v] -= 1

                if indegree[v] == 0:
                    queue.append(v)

        if len(items) == len(indegree):
            return ''.join(items)

        return ''
