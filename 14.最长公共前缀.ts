/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (strs.length < 2) {
    return strs[0];
  }
  let endIndex = 0;

  let loop = true;
  while (loop) {
    for (let i = 1, prev = strs[0][endIndex]; i < strs.length; i++) {
      const element = strs[i][endIndex];
      if (!prev || prev !== element) {
        loop = false;
        endIndex--;
        break;
      }
      prev = element;
    }

    endIndex++;
  }

  return strs[0].substring(0, endIndex);
}
// @lc code=end

test("longestCommonPrefix", () => {
  // expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  // expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  expect(longestCommonPrefix([""])).toBe("");
});
