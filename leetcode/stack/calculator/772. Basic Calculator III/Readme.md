Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators , open ( and closing parentheses ) and empty spaces. 

The integer division should truncate toward zero.

You may assume that the given expression is always valid. 

All intermediate results will be in the range of [-2147483648, 2147483647].

Follow up: Could you solve the problem without using built-in library functions.

```
Example 1:
  Input: s = "1 + 1"
  Output: 2

Example 2:
  Input: s = " 6-4 / 2 "
  Output: 4

Example 3:
  Input: s = "2*(5+5*2)/3+(6/2+8)"
  Output: 21

Example 4:
  Input: s = "(2+6* 3+5- (3*14/7+2)*5)+3"
  Output: -12

Example 5:
  Input: s = "0"
  Output: 0
```

**Constraints:**
  1 <= s <= 104
  s consists of digits, '+', '-', '*', '/', '(', ')' and ' '.
  s is a valid expression.