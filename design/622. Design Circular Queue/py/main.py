class MyCircularQueue:

    def __init__(self, k: int):
      """
      Initialize your data structure here. Set the size of the queue to be k.
      """
      self.maxLen = k
      self.queue = [None] * k
      self.headIndex = 0
      self.count = 0
        
    def enQueue(self, value: int) -> bool:
        """
        Insert an element into the circular queue. Return true if the operation is successful.
        """
        if self.isFull():
          return False

        tailIndex = (self.headIndex + self.count) % self.maxLen

        self.queue[tailIndex] = value
        self.count += 1 
 
        return True

    def deQueue(self) -> bool:
        """
        Delete an element from the circular queue. Return true if the operation is successful.
        """
        if self.isEmpty():
          return False

        self.headIndex = (self.headIndex + 1) % self.maxLen
        self.count -= 1

        return True

    def Front(self) -> int:
        """
        Get the front item from the queue.
        """
        if self.isEmpty():
          return -1

        return self.queue[self.headIndex]
        

    def Rear(self) -> int:
        """
        Get the last item from the queue.
        """
        if self.isEmpty():
          return -1

        return self.queue[(self.headIndex + self.count - 1) % self.maxLen]


    def isEmpty(self) -> bool:
        """
        Checks whether the circular queue is empty or not.
        """
        return self.count == 0        

    def isFull(self) -> bool:
        """
        Checks whether the circular queue is full or not.
        """
        return self.count == self.maxLen
