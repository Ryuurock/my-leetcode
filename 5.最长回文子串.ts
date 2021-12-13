/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  if (s.length < 2) {
    return s;
  }
  const expandAroundCenter = (s: string, left: number, right: number) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      --left;
      ++right;
    }

    return right - left - 1;
  };

  let start = 0,
    end = 0;
  for (let index = 0; index < s.length; index++) {
    const len1 = expandAroundCenter(s, index, index);
    const len2 = expandAroundCenter(s, index, index + 1);
    const len = Math.max(len1, len2);
    if (len > end - start) {
      start = index - Math.floor((len - 1) / 2);
      end = index + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}
// @lc code=end
test("longestPalindrome", () => {
  expect(longestPalindrome("abb")).toBe("bb");
});
