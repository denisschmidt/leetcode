/*
Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

For example, given a 3-ary tree:

// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> children;

    Node() {}

    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};
*/
class Solution {
private: int max;
public:
    int maxDepth(Node* root) {
        if (root == NULL) {
            return 0;
        }
        maxDepth(root, 1);
        return max;
    }
    void maxDepth(Node* node, int depth) {
        if (node == NULL) return;
        max = std::max(max, depth);
        for (auto child : node->children) {
            maxDepth(child, depth+1);
        }
    }
};
