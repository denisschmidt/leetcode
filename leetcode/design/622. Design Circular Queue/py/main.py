class MyCircularQueue:
    #  Initializes the object with the size of the queue to be k.
    def __init__(self, k: int):
        self.maxSize = k
        self.headIndex = 0
        self.currentSize = 0        
        self.queue = [0] * k


    # Inserts an element into the circular queue. Return true if the operation is successful.
    def enQueue(self, value: int) -> bool:
        if self.isFull():
            return False

        tailIndex = (self.headIndex + self.currentSize) % self.maxSize
        self.queue[tailIndex] = value
        self.currentSize += 1

        return True


    #  Deletes an element from the circular queue. Return true if the operation is successful.    
    def deQueue(self) -> bool:
        if self.isEmpty():
            return False
        
        # We need remove a leftmost element
        self.headIndex = (self.headIndex + 1) % self.maxSize
        self.currentSize -= 1

        return True


    # Gets the front item from the queue. If the queue is empty, return -1.
    def Front(self) -> int:
        if self.isEmpty():
            return -1

        return self.queue[self.headIndex]


    # Gets the last item from the queue. If the queue is empty, return -1.
    def Rear(self) -> int:
        if self.isEmpty():
            return -1

        tailIndex = (self.headIndex + self.currentSize - 1) % self.maxSize
        
        return self.queue[tailIndex]


    # Checks whether the circular queue is empty or not.
    def isEmpty(self) -> bool:
        return self.currentSize == 0


    # Checks whether the circular queue is full or not.
    def isFull(self) -> bool:
        return self.currentSize == self.maxSize
