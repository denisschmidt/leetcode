"""
  Giver weighted graph (without negative cycles but with possible negative edges) 
  find shortest path length from vertex s to all other vertices

  Negative cycles - цикл с сумарным отрицательным весом. Можем зайти в цикл и набрать -INF вес пути. 
  Понятия мин растояния тут не будет. 

  Every path consist of no more than n - 1 edges.

  dp[k, i, j] - min path len from vertex i to vertex j if only vertices [0, k) are allowed to visit

  dp[k+1, i, j] = min(dp[k, i, j], dp[k, i, k] + dp[k, k, j])

  We either don't visit (k + 1) vertex or visit it as some middle vertex

  Можем проверить негативные циклы 
 
"""


# Time O(V^3)
# Min cache between all edges
# Equal n-times of Dijkstra
def floyd(n, edge):
    # edge[i][j] -> weight of edge (i => j) or MAX_INF if there is not edge
    for k in range(n):
        for i in range(n):
            for j in range(n):
                edge[i][j] = min(edge[i][j], edge[i][k] + edge[j][k])
