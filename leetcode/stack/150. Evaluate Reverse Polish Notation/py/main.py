class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
      st = []
      operations = {
        "+": lambda a, b: a + b,
        "-": lambda a, b: a - b,
        "/": lambda a, b: int(a / b),
        "*": lambda a, b: a * b
      }
        
      for operator in tokens:
        if operator in '+-*/':
          operation = operations[operator]
          a = st.pop()
          b = st.pop()
          st.append(operation(b, a))
        else:
          st.append(int(operator))
          
      return st.pop()
