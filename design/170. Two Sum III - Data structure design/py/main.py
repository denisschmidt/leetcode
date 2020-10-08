class TwoSum:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.num_counts = {}
        
    # Time O(1)
    def add(self, number: int) -> None:
        """
        Add the number to an internal data structure..
        """
        if number in self.num_counts:
          self.num_counts[number] += 1
        else:
          self.num_counts[number] = 1
        
    # Time O(N)
    def find(self, value: int) -> bool:
        """
        Find if there exists any pair of numbers which sum is equal to the value.
        """
        for a in self.num_counts.keys():
          b = value - a

          if b in self.num_counts:
            if a == b:
              if self.num_counts[b] > 1:
                return True
            else:
              return True

        return False
        
# Your TwoSum object will be instantiated and called as such:
# obj = TwoSum()
# obj.add(number)
# param_2 = obj.find(value)