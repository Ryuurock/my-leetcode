import { myParseInt } from ".";

test("字符串转换整数 (atoi)", () => {
  expect(myParseInt("42")).toBe(42);
  expect(myParseInt("   -42")).toBe(-42);
  expect(myParseInt("4193 with words")).toBe(4193);
  expect(myParseInt("words and 987")).toBe(0);
  expect(myParseInt("-91283472332")).toBe(-2147483648);
});
