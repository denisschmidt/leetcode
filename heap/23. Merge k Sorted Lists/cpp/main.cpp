struct ListNode {
  int val;
  ListNode *next;
  ListNode() : val(0), next(nullptr) {}
  ListNode(int x) : val(x), next(nullptr) {}
  ListNode(int x, ListNode *next) : val(x), next(next) {}
};

struct Cmp {
    bool operator()(const ListNode *a, const ListNode *b) {
        return a->val > b->val;
    }
};

// Time O(NlogK)
// Space O(K)
class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        priority_queue<ListNode*, vector<ListNode*>, Cmp> pq;
        
        for(auto list : lists) {
            if (list) {
                pq.push(list);
            }
        }
        
        ListNode dummy(0), *tail = &dummy;
        
        while (!pq.empty()) {
            auto node = pq.top();
            pq.pop();
            
            if (node->next) {
                pq.push(node->next);
            }
            
            tail->next = node;
            tail = tail->next;
        }        
        
        return dummy.next;
    }
};