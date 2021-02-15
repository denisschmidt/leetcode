# Dynamic programming (masks) 

Bit mask - it's a subset of numbers.

Type of dynamic programming problems where state is characterized by subset of original set A.

Every subset of X = {0, 1, …, n - 1} can be represented as integer from 0 to 2^n - 1 -- f: A → sum {x in A} 2^x, e.g. {0, 2} → 5.



# Bit operations:

Whole set: (1 << n) - 1

Get(i): (A >> i) & 1 

Add(i): A | (1 << i)

Delete(i): A & ~(1 << i)

A in B: A & B == A



# Subset sum

Calculate sum of every subset of set S = {a[1], a[2], …, a[n]}

Straightforward solution O(2^n * n)

> Every number, we can take it or not. Therefore totally we have 2^N combinations

bit = 0; // most significant bit of A

for (int A = 1; A < (1 << n); A++) {
  if (A == 1 << (bit + 1))
    bit++;
  sum[A] = sum[A ^ (1 << bit)] + w[bit];
}

O(2^N) time and space complexities



# Hamiltonian path

Find if given graph contains Hamiltonian path - path that visits each vertex exactly once.

Straightforward solution O(n! * n) - get all possible paths and check if this path exists into your graph.

canVisit[p][v] - is it possible to visit subset of vertices p so that end vertex in path is v

Перебираем последнюю вершинку, которая оказалась в пути. 

p - некоторое множество пройденных вершин
v - последняя вершина из этих пройденных 

for (int i = 0; i < n; i++) { 
  // Можем ли мы пройти путь (1 << i) закончив его в вершине (i)
  canVisit[1 << i][i] = true; // We can start with path {i}
}

for (int path = 0; path < (1 << n); path++) {
  for (int v = 0; v < n; v++) {
    if (canVisit[path][v]) {
      for (int u = 0; u < n; u++) {
        // next vertex in path
        if (u not in path && graph[v][u])
          // добавили u вершину и последняя вершина теперь u
          canVisit[path | (1 << u)][u] = true; 
      }
    }
  }
}

Answer: canVisit[(1 << n) - 1][0] | … | canVisit[(1 << n) - 1][n - 1]

O(2^n * n^2) time and O(2^n * n) space complexities



# Vertex color

Given the graph, color its vertices in minimal number of colors so that adjacent vertices have different colors.

At first let’s find all independent subsets - such subsets that do not have any two adjacent vertices

> Time O(2^N * N^2)

for (int A = 0; A < (1 << n); A++) {
  isIndependent[A] = true;

  for (int v = 0; v < n; v++) {
    for (int u = 0; u < v; u++) {
      if (v in A && u in A && g[v][u]) {
        isIndependent[A] = false;
      }
    }
  }
}

Now minColors[A] -- minimal number of colors needed to color A 

Every color forms an independent subset

Let’s choose a submask of vertices for the first color

fill(minColors, INT_MAX);

minColors[0] = 0;

for (int A = 1; A < (1 << n); A++) {
  for (int submask = 0; submask < (1 << n); submask++)
    if (isIndependent[submask] && submask in A)
      relax(minColors[A], minColors[A \ submask] + 1);
}

O(4^n) time and O(2^n) space complexities
