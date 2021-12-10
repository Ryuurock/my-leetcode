import { convertZMine } from "./6";

test("字符串z字形变换", () => {
  expect(convertZMine("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
  expect(convertZMine("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
  expect(convertZMine("A", 1)).toBe("A");
});
