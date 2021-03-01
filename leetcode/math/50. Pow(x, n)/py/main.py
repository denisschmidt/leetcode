class Solution:
    # Time O(LogN)
    # Space O(LogN)
    """
      Assume we have got the result of x^(n / 2) and now we want to get the result of x ^ n
    
      Let A be result of x^(n/2) we can talk about x^n based on the parity of n respectively. 
      
      If n is even, we can use the formula (x^n)^2 = x^(2*n) to get x^n = A * A
      
      If n is odd, then A*A = x^(n - 1). 
      
      Intuitively, We need to multiply another x to the result, so x^n = A * A * x. 
      
      This approach can be easily implemented using recursion. 
      
      We call this method "Fast Power", because we only need at most OO(logn) computations to get x^n.
    """
    def myPow(self, x: float, n: int) -> float:
        if n == 0:
            return 1

        if n < 0:
            x = 1 / x
            n = -n

        if n % 2 == 1:
            return x * self.myPow(x, n - 1)

        return self.myPow(x * x, n / 2)

    # Time O(N) multiply x for n times
    def myPow_II(self, x: float, n: int) -> float:
        if n < 0:
            x = 1 / x
            n = -n

        ans = 1

        for _ in range(n):
            ans = ans * x

        return ans