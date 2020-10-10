/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func insertIntoBST(root *TreeNode, val int) *TreeNode {
	if root == nil {
			return &TreeNode { Val: val }
	}
	
	if val > root.Val {
			root.Right = insertIntoBST(root.Right, val)
	} 
	
	if val < root.Val {
			root.Left = insertIntoBST(root.Left, val)
	}
	
	return root
}
