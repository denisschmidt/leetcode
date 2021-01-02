# Double Linked List
class MyCircularDeque:

    def __init__(self, k: int):
        """
        Initialize your data structure here. Set the size of the deque to be k.
        """
        self.linkedList = DoubleLinkedList()
        self.maxSize = k
        self.currentSize = 0


    def insertFront(self, value: int) -> bool:
        """
        Adds an item at the front of Deque. Return true if the operation is successful.
        """
        if self.isFull():
            return False

        self.linkedList.insertHead(Node(value))
        self.currentSize += 1

        return True


    def insertLast(self, value: int) -> bool:
        """
        Adds an item at the rear of Deque. Return true if the operation is successful.
        """
        if self.isFull():
            return False
        
        self.linkedList.insertTail(Node(value))
        self.currentSize += 1

        return True


    def deleteFront(self) -> bool:
        """
        Deletes an item from the front of Deque. Return true if the operation is successful.
        """
        if self.isEmpty():
            return False

        self.linkedList.removeTop()
        self.currentSize -= 1
        
        return True


    def deleteLast(self) -> bool:
        """
        Deletes an item from the rear of Deque. Return true if the operation is successful.
        """
        if self.isEmpty():
            return False
        
        self.linkedList.removeLast()
        self.currentSize -= 1

        return True


    def getFront(self) -> int:
        """
        Get the front item from the deque.
        """
        if self.isEmpty():
            return -1

        return self.linkedList.getTop().value


    def getRear(self) -> int:
        """
        Get the last item from the deque.
        """
        if self.isEmpty():
            return -1
        
        return self.linkedList.getLast().value


    def isEmpty(self) -> bool:
        """
        Checks whether the circular deque is empty or not.
        """
        return self.currentSize == 0


    def isFull(self) -> bool:
        """
        Checks whether the circular deque is full or not.
        """
        return self.currentSize == self.maxSize


class Node:
    def __init__(self, value = ''):
        self.value = value
        self.prev = self.next = None


class DoubleLinkedList:
    def __init__(self):
        self.head = Node()
        self.tail = Node()

        self.head.next = self.tail
        self.tail.prev = self.head


    def insertTail(self, node):    
        node.prev = self.tail.prev
        node.next = self.tail

        self.tail.prev.next = node
        self.tail.prev = node


    def insertHead(self, node):
        node.next = self.head.next
        node.prev = self.head
        
        self.head.next.prev = node
        self.head.next = node


    def removeLast(self):
        return self.remove(self.tail.prev)


    def removeTop(self):
        return self.remove(self.head.next)


    def remove(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev


    def getTop(self):
        return self.head.next


    def getLast(self):
        return self.tail.prev


# Circular Queue 
class MyCircularDeque_II:

    def __init__(self, k: int):
        """
        Initialize your data structure here. Set the size of the deque to be k.
        """
        self.maxSize = k
        self.headIndex = self.tailIndex = 0
        self.queue = [None] * k
        self.currentSize = 0        
    
    def insertFront(self, value: int) -> bool:
        """
        Adds an item at the front of Deque. Return true if the operation is successful.
        """
        if self.isFull():
            return False
        
        self.currentSize += 1
        self.headIndex = (self.headIndex - 1) % len(self.queue)
        self.queue[self.headIndex] = value

        return True

    def insertLast(self, value: int) -> bool:
        """
        Adds an item at the rear of Deque. Return true if the operation is successful.
        """
        if self.isFull():
            return False
        
        self.currentSize += 1
        self.queue[self.tailIndex] = value
        self.tailIndex = (self.tailIndex + 1) % len(self.queue)

        return True    
        
    def deleteFront(self) -> bool:
        """
        Deletes an item from the front of Deque. Return true if the operation is successful.
        """
        if self.isEmpty():
            return False
        
        self.currentSize -= 1
        self.headIndex = (self.headIndex + 1) % len(self.queue)

        return True


    def deleteLast(self) -> bool:
        """
        Deletes an item from the rear of Deque. Return true if the operation is successful.
        """
        if self.isEmpty():
            return False

        self.currentSize -= 1
        self.tailIndex = (self.tailIndex - 1) % len(self.queue)

        return True


    def getFront(self) -> int:
        """
        Get the front item from the deque.
        """
        if self.isEmpty():
            return -1
        
        return self.queue[self.headIndex]


    def getRear(self) -> int:
        """
        Get the last item from the deque.
        """
        if self.isEmpty():
            return -1

        return self.queue[(self.tailIndex - 1) % len(self.queue)]        

    def isEmpty(self) -> bool:
        """
        Checks whether the circular deque is empty or not.
        """        
        return self.currentSize == 0

    def isFull(self) -> bool:
        """
        Checks whether the circular deque is full or not.
        """
        return self.currentSize == self.maxSize
