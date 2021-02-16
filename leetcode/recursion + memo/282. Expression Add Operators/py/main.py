class Solution:
    # Time O(4^N)
    # Space O(N)
    def addOperators(self, num, target):
        n = len(num)
        ans = []

        def dfs(index, prevNumber, curNumber, totalSum, items):
            # Done processing all the digits in num
            if index >= n:
                # If the final value == target expected AND no unprocessed numbers
                if totalSum == target and curNumber == 0:
                    ans.append(''.join(items)[1:])
                return

            # Extending the current operand by one digit
            curNumber = curNumber * 10 + int(num[index])
            strCurNumber = str(curNumber)

            # To avoid cases where we have 1 + 05 or 1 * 05 since 05 won't be a valid operand.
            # Extend current number
            if curNumber > 0:
                dfs(index + 1, prevNumber, curNumber, totalSum, items)

            # Apply operations to the current number

            items.append('+')
            items.append(strCurNumber)

            dfs(index + 1, curNumber, 0, totalSum + curNumber, items)

            items.pop()
            items.pop()

            # Can subtract or multiply only if there are some previous operands
            if items:
                # SUBTRACTION
                items.append('-')
                items.append(strCurNumber)

                dfs(index + 1, -curNumber, 0, totalSum - curNumber, items)

                items.pop()
                items.pop()

                # MULTIPLICATION
                items.append('*')
                items.append(strCurNumber)

                dfs(index + 1, prevNumber * curNumber, 0,
                    totalSum - prevNumber + (curNumber * prevNumber), items)

                items.pop()
                items.pop()

        dfs(0, 0, 0, 0, [])

        return ans