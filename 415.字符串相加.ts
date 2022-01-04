/*
 * @lc app=leetcode.cn id=415 lang=typescript
 *
 * [415] 字符串相加
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
  const maxLength = Math.max(num1.length, num2.length);
  let ans = "";

  let carry = 0;

  let offset = 0;

  while (offset < maxLength) {
    const element = num1[num1.length - 1 - offset] || "";
    const element2 = num2[num2.length - 1 - offset] || "";
    const sum = +element + +element2 + carry;
    carry = Math.floor(sum / 10);
    ans = (sum % 10) + ans;

    offset++;
  }

  if (carry) {
    ans = carry + ans;
  }

  return ans;
}
// @lc code=end

test("addStrings", () => {
  expect(addStrings("11", "123")).toBe("134");
  expect(addStrings("0", "0")).toBe("0");
  expect(addStrings("456", "77")).toBe("533");
  expect(addStrings("1", "9")).toBe("10");
});
