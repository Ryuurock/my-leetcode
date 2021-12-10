import { mine, mine2, mine3, mine4 } from "./7";

test("整数反转: 使用内置函数偷懒版", () => {
  expect(mine(123)).toBe(321);
  expect(mine(-123)).toBe(-321);
  expect(mine(120)).toBe(21);
  expect(mine(0)).toBe(0);
});

test("整数反转: 乖乖翻转版", () => {
  expect(mine2(123)).toBe(321);
  expect(mine2(-123)).toBe(-321);
  expect(mine2(120)).toBe(21);
  expect(mine2(0)).toBe(0);
});

test("整数反转: 节约空间版", () => {
  expect(mine3(123)).toBe(321);
  expect(mine3(-123)).toBe(-321);
  expect(mine3(120)).toBe(21);
  expect(mine3(0)).toBe(0);
});
test("整数反转: 正常实现版", () => {
  expect(mine4(123)).toBe(321);
  expect(mine4(-123)).toBe(-321);
  expect(mine4(120)).toBe(21);
  expect(mine4(0)).toBe(0);
});
