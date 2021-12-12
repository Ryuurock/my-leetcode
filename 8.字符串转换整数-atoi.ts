/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
  const allowChar = /[\d|\s|-]/;
  const strs = s.replace(/^\s*/, "").split("");
  let clearNum = "";

  for (let index = 0; index < strs.length; index++) {
    const element = strs[index];
    if (index === 0 && !allowChar.test(element)) {
      return 0;
    } else if (/[\d|-]/.test(element)) {
      clearNum += element;
    }
  }

  return Math.min(Math.max(parseInt(clearNum), -(2 ** 31)), 2 ** 31);
}
// @lc code=end
