import collections

"""

Цель - найти ребра которые не приводят к циклу 
Данный алгоритм работает только для undirected графа

http://www.cs.umd.edu/class/fall2017/cmsc451-0101/Lects/lect04-edge-connectivity.pdf


"""

# Tarjan's Algorithm  https://www.youtube.com/watch?v=2kREIkF9UAs&t=809s
# E = общее количество ребер
# V = общее количество вершин
# Time O(V + E)
# Space O(V + E)
class Solution:
    def criticalConnections(self, n: int, connections):
        ans, inf = [], float('inf')
        adjList = collections.defaultdict(list)
        visited = [False] * n
                
        # записываем номера верншин при обходе
        visited_time = [-inf] * n

        # low discovery time
        # нужно для определения моста между связями
        # если есть цикл значения всегда будут одинаковые и равны минимальному значению в цикле
        min_reach_time = [inf] * n

        # отметка времени при входе в вершину
        time = 0

        for u, v in connections:
            adjList[u].append(v)
            adjList[v].append(u)


        def dfs(u, parent):
            nonlocal time
            # установить время обнаружения и инициировать min_reach_time
            visited_time[u] = min_reach_time[u] = time
            time += 1

            visited[u] = True

            for v in adjList[u]:
                # в неориентированном графе внешний край может вернуться сразу
                if parent == v:
                    continue

                if visited[v]:
                    # Обновляем минимальное время
                    # Берем минимальное значение из смежных точек
                    min_reach_time[u] = min(min_reach_time[u], visited_time[v])
                else:
                    dfs(v, u)

                    # Во время backtracking прослеживаем минимальное значение
                    min_reach_time[u] = min(min_reach_time[u], min_reach_time[v])

                    print(u, v, visited_time[u], visited_time[v], min_reach_time[v])


                    # По сути это следущее значение так как мы поднимаемся по рекурсии (Bottom-top рекурсия)
                    # Если ДОСТИГНУТОЕ время меньше чем время смежных точек значит мы нашли мост
                    if visited_time[u] < min_reach_time[v]:
                        ans.append([u, v])
                    
        dfs(0, -1)

        print(min_reach_time, visited_time)

        return ans


x = Solution()

print(x.criticalConnections(6,[[0,1],[1,2],[2,0],[1,3],[3,4],[4,5],[5,3]]))