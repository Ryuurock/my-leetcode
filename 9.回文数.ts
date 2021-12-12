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
  return numStr === numStr.split("").reverse().join("");
}
// @lc code=end
