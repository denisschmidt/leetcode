# Time O(N)
# Space O(1)
class Solution:
    def minDominoRotations(self, A: List[int], B: List[int]) -> int:
      def check(x):
        swap_A, swap_B = 0, 0

        for i in range(n):
          if A[i] != x and B[i] != x:
            return -1

          elif A[i] != x:
            swap_A += 1
          
          elif B[i] != x:
            swap_B += 1

        return min(swap_A, swap_B)    
        
      n = len(A)
      
      rotations = check(A[0])

      if rotations != -1 or A[0] == B[0]:
        return rotations
      else:
        return check(B[0])

