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

  if (reverseNum > 2 ** 31 - 1 || reverseNum < (-2) ** 31) {
    return 0;
  }

  return reverseNum;
}
// @lc code=end

test("reverse", () => {
  expect(reverse(-2147483648)).toBe(0);
});
