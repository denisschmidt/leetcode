class Solution:
    # 1) Create an empty list which would be used to hold the results of sorting.
    
    # 2) Then iterate through each element in the input list. 
    #    For each element, we need to find a proper position in the resulting list to insert the element, 
    #   so that the order of the resulting list is maintained.

    # 3) As one can see, once the iteration in the above step terminates, we will obtain the resulting list where the elements are ordered.
    
    # Time O(N^2)
    # Space O(1) 
    def insertionSortList(self, head):
        dummy = ListNode()
        prev = dummy
        curr = head
        nextNode = None

        while curr:
            while prev and prev.next and prev.next.val < curr.val:
              prev = prev.next
            
            # store next node
            nextNode = curr.next

            # we find position for the current node and insert the current node to the new list
            curr.next = prev.next
            prev.next = curr

            # moving on to the next iteration
            curr = nextNode

            # At each iteration, we insert an element into the resulting list.
            prev = dummy

        return dummy.next

    # Time O(N^2)
    # Space O(1)
    def insertionSortList_II(self, head):
        current = head
        prev = None

        # create double linked list
        while current != None:
            current.prev = prev
            prev = current
            current = current.next

        current = head
      
        while current:
            p = current

            while p.prev != None:
                if p.prev.val > p.val:
                  tmp = p.val
                  p.val = p.prev.val
                  p.prev.val = tmp
                else:
                  break
                p = p.prev

            current = current.next 

        return head
          
