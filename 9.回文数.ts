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

  let revertedNumber = 0;

  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x === revertedNumber || x === Math.floor(revertedNumber / 10);
}
// @lc code=end
