/*
 * @lc app=leetcode.cn id=12 lang=typescript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
function intToRoman(num: number): string {
  const numMap = new Map<number, string>();
  numMap.set(1000, "M");
  numMap.set(900, "CM");
  numMap.set(500, "D");
  numMap.set(400, "CD");
  numMap.set(100, "C");
  numMap.set(90, "XC");
  numMap.set(50, "L");
  numMap.set(40, "XL");
  numMap.set(10, "X");
  numMap.set(9, "IX");
  numMap.set(5, "V");
  numMap.set(4, "IV");
  numMap.set(1, "I");

  let ans = "";

  for (const [numKey, symbol] of numMap) {
    while (numKey <= num) {
      ans += symbol;
      num -= numKey;
    }

    if (num === 0) {
      break;
    }
  }
  return ans;
}
// @lc code=end
test("intToRoman", () => {
  expect(intToRoman(9)).toBe("IX");
});
