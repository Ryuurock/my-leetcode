import { mine } from "./5";

test("最长回文子串", () => {
  expect(mine("babad")).toBe("bab");
  expect(mine("cbbd")).toBe("bb");
  expect(mine("a")).toBe("a");
  expect(mine("ac")).toBe("a");
  expect(mine("12acbca11")).toBe("acbca");
});
