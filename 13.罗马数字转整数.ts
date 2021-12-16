/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
  const numMap = new Map<string, number>();
  numMap.set("M", 1000);
  numMap.set("CM", 900);
  numMap.set("D", 500);
  numMap.set("CD", 400);
  numMap.set("C", 100);
  numMap.set("XC", 90);
  numMap.set("L", 50);
  numMap.set("XL", 40);
  numMap.set("X", 10);
  numMap.set("IX", 9);
  numMap.set("V", 5);
  numMap.set("IV", 4);
  numMap.set("I", 1);

  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    let num1 = numMap.get(element)!;

    const num2 = numMap.get(element + s[i + 1]);

    if (num2) {
      i++;
      num1 = num2;
    }

    ans += num1;
  }

  return ans;
}
// @lc code=end
test("romanToInt", () => {
  expect(romanToInt("MCMXCIV")).toBe(1994);
});
