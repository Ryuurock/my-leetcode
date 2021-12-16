/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  let ans = 0;

  let left = 0,
    right = height.length - 1;

  while (left < right) {
    const leftHeight = height[left],
      rightHeight = height[right];
    ans = Math.max(ans, Math.min(height[right], height[left]) * (right - left));
    if (leftHeight < rightHeight) {
      left++;
    } else {
      right--;
    }
  }

  return ans;
}
// @lc code=end

test("maxArea", () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
});
