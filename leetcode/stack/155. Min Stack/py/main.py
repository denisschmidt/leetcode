import collections

class MinStack:

    def __init__(self):
        self.stack = []
        self.min_backet = []


    def push(self, x: int) -> None:
      self.stack.append(x)

      if not self.min_backet or self.min_backet[-1] >= x:
        self.min_backet.append(x)
      

    def pop(self) -> None:
      x = self.stack.pop()

      if self.min_backet[-1] == x:
        self.min_backet.pop()
      

    def top(self) -> int:
      return self.stack[-1]
      
      
    def getMin(self) -> int:
        return self.min_backet[-1]

