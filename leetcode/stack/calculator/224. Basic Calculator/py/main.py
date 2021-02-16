import operator
"""
  Steps:

  1) Create two stacks for operations and numbers

  2) Iterate thoughts over the array  
  
  3) While it's possible calculate prev operation's and add this new value to our stack of numbers
  
  4) Continue iterating
"""


class Solution:
    # Time O(N)
    # Space O(N)
    def calculate(self, s: str) -> int:
        opersPrior = {'+': 0, '-': 0, '*': 1, '/': 1, '(': -1}
        calc = {
            '+': operator.add,
            '*': operator.mul,
            '-': lambda x, y: y - x,
            '/': lambda x, y: int(y / x)
        }

        numsStack, opersStack = [], []
        i = 0

        while i < len(s):
            if s[i] == ' ':
                i += 1
                continue

            elif s[i] == '(':
                opersStack.append('(')

            elif s[i] == ')':
                while opersStack[-1] != '(':
                    numsStack.append(calc[opersStack.pop()](numsStack.pop(), numsStack.pop()))

                # remove "(" from the stack
                opersStack.pop()

            elif s[i] in opersPrior:
                while opersStack and opersPrior[opersStack[-1]] >= opersPrior[s[i]]:
                    numsStack.append(calc[opersStack.pop()](numsStack.pop(), numsStack.pop()))

                if s[i] == '-' and not opersStack and not numsStack:
                    numsStack.append(0)

                opersStack.append(s[i])

            else:
                buf = ''

                while i < len(s) and s[i].isdigit():
                    buf += s[i]
                    i += 1

                numsStack.append(int(buf))
                i -= 1

            i += 1

        while opersStack:
            numsStack.append(calc[opersStack.pop()](numsStack.pop(),numsStack.pop()))

        return numsStack[-1]