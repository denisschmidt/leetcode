           
# Implement Binary Index Tree
class IndexedTree:
    def __init__(self, size):
        self.size = size
        self.tree = [0] * size
        
    def query(self, index):
        index += 1
        res = 0
        
        while index > 0:
            res += self.tree[index]
            index = self.get_parent(index)
            
        return res
    
    def insert(self, index, val):
        index += 1
        
        while index < self.size:
            self.tree[index] += val
            index = self.get_child(index)
            
    def get_parent(self, index):
        return index - (index & -index)
    
    def get_child(self, index):
        return index + (index & -index)
       