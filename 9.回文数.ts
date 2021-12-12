/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  const numStr = x.toString();
  if (numStr.length % 2) {
    return (
      numStr.substring(0, Math.floor(numStr.length / 2)) ===
      numStr.substring(Math.ceil(numStr.length / 2), numStr.length)
    );
  }

  return (
    numStr.substring(0, numStr.length / 2) ===
    numStr.substring(numStr.length / 2, numStr.length)
  );
}
// @lc code=end
