/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(str: string): string {
  if (str.length < 2) {
    return str;
  }
  let maxStrRange: [number, number] = [0, 1];

  for (let index = 0; index < str.length; index++) {
    let start = index - 1,
      end = index + 1;

    if (index - 1 < 0 || index + 1 > str.length - 1) {
      continue;
    }

    if (str[index] === str[end]) {
      start = index;
    }

    while (start >= 0 && end <= str.length - 1) {
      if (
        str[start] === str[end] &&
        end + 1 - start > maxStrRange[1] - maxStrRange[0]
      ) {
        maxStrRange = [start, end + 1];

        start -= 1;
        end += 1;
      } else {
        break;
      }
    }
  }

  return str.substring(...maxStrRange);
}
// @lc code=end
