/*
 * @lc app=leetcode.cn id=10 lang=typescript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
  let sIndex = 0;
  for (let index = 0; index < p.length; index++) {
    const element = p[index];
    const currentChar = s[sIndex];
    if (element === ".") {
      if (p[index + 1] === "*") {
        const moreChar = p[index + 2];
        if (moreChar) {
          while (moreChar !== s[sIndex] && sIndex < s.length) {
            sIndex++;
          }
          if (sIndex > s.length - 1) {
            return false;
          }
          index++;
        } else {
          return true;
        }
      } else {
        sIndex++;
      }
    } else if (element === "*") {
      const prevChar = s[index - 1];
      while (prevChar === s[sIndex] && sIndex < s.length) {
        sIndex++;
      }
    } else if (element === currentChar) {
      sIndex++;
    } else if (currentChar === undefined) {
      return false;
    }
  }

  return sIndex > s.length - 1;
}
// @lc code=end

test("isMatch", () => {
  // expect(isMatch("aa", "a")).toBe(false);
  // expect(isMatch("aa", "a*")).toBe(true);
  // expect(isMatch("ab", ".*")).toBe(true);
  expect(isMatch("aab", "c*a*b")).toBe(true);
  // expect(isMatch("mississippi", "mis*is*p*.")).toBe(false);
  // expect(isMatch("ab", ".*c")).toBe(false);
  // expect(isMatch("aaa", "aaaa")).toBe(false);
});
