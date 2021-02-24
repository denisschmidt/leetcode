

// Definition for a Node.
class Node
{
public:
  int val;
  vector<Node *> neighbors;

  Node()
  {
    val = 0;
    neighbors = vector<Node *>();
  }

  Node(int _val)
  {
    val = _val;
    neighbors = vector<Node *>();
  }

  Node(int _val, vector<Node *> _neighbors)
  {
    val = _val;
    neighbors = _neighbors;
  }
};

class Solution
{

private:
  unordered_map<Node *, Node *> map;

public:
  Node *cloneGraph(Node *node)
  {
    if (node == NULL)
      return NULL;

    if (map.find(node) != map.end())
    {
      return map[node];
    }

    map[node] = new Node(node->val);

    for (auto n : node->neighbors)
    {
      map[node]->neighbors.push_back(cloneGraph(n));
    }

    return map[node];
  }
};