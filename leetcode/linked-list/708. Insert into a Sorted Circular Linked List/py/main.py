
class Solution:
    # Time O(N)
    # Space O(N)
    def insert(self, head: 'Node', insertVal: int) -> 'Node':
        if not head:
            node = Node(insertVal)
            node.next = node
            return node

        def setNexNode(node, val):
            tmp = node.next
            node.next = Node(val)
            node.next.next = tmp
        
        min_ptr = None

        node_dict = set()
        ptr = head
        
        # find the min node
        while ptr not in node_dict:
            if not min_ptr or ptr.val < min_ptr.val:
                min_ptr = ptr
            node_dict.add(ptr)
            ptr = ptr.next
        
        ptr = min_ptr

        while ptr.next != min_ptr:
            if ptr.val <= insertVal and ptr.next.val >= insertVal:
                setNexNode(ptr, insertVal)
                return head
            
            ptr = ptr.next
            
        if ptr.next == min_ptr:
            setNexNode(ptr, insertVal)
        
        return head 
        

