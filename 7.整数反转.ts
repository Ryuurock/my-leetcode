/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
  let startNum = x;

  let reverseNum = 0;

  while (startNum !== 0) {
    const digit = startNum % 10;
    reverseNum = reverseNum * 10 + digit;
    startNum = parseInt((startNum / 10).toString(), 10);
  }

  return reverseNum;
}
// @lc code=end
