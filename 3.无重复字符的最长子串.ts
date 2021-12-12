/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(str: string): number {
  const set = new Set<string>();
  let rightIndex = 0;
  let ans = 0;

  const strLength = str.length;

  for (let index = 0; index < strLength; index++) {
    set.delete(str[index - 1]);

    while (rightIndex < strLength && !set.has(str[rightIndex])) {
      set.add(str[rightIndex]);
      rightIndex++;
    } // 在这里遇到重复字符串或者结束了，需要在下次循环时删掉，以重新开始

    ans = Math.max(ans, rightIndex - index);
  }

  return ans;
}
// @lc code=end
