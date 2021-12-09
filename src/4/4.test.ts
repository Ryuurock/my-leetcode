import { mine } from "./4";

test("寻找两个正序数组的中位数-mine", () => {
  expect(mine([1, 3], [2])).toBe(2);
  expect(mine([1, 2], [3, 4])).toBe(2.5);
  expect(mine([], [1])).toBe(1);
  expect(mine([2], [])).toBe(2);
});
