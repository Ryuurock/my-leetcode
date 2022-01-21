/*
 * @lc app=leetcode.cn id=257 lang=typescript
 *
 * [257] 二叉树的所有路径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function binaryTreePaths(root: TreeNode | null): string[] {
  const ans: string[] = [];

  const getPath = (node: typeof root, path = "") => {
    if (node) {
      path += node.val.toString();

      if (!node.left && !node.right) {
        ans.push(path);
      } else {
        path += "->";
        getPath(node.left, path);
        getPath(node.right, path);
      }
    }
  };

  getPath(root);

  return ans;
}
// @lc code=end
