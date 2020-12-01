class NumMatrix:

    def __init__(self, matrix: List[List[int]]):
        if len(matrix):
          n, m = len(matrix), len(matrix[0])

          self.tree = [[0 for i in range(m+1)] for j in range(n+1)]

          for i in range(n):
            for j in range(m):
              self.insert(i, j, matrix[i][j])


    def getParent(self, index):
      return index - (index & -index);


    def getChild(self, index):
      return index + (index & -index);


    def insert(self, x, y, val):
      x += 1
      y += 1
      
      while x < len(self.tree):  
        while y < len(self.tree[0]):        
          self.tree[x][y] += val
          y = self.getChild(y)
        x = self.getChild(x)

    def query(self, x, y):
      res = 0

      while x > 0:
        while y > 0:
          res += self.tree[x][y]
          y = self.getParent(y)
        x = self.getParent(x)

      return res


    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:    
        return self.query(row2 + 1, col2 + 1) - self.query(row1, col2 + 1) - self.query(row2 + 1, col1) + self.query(row1, col1)
