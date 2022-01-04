/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  nums.sort();

  if (nums.length < 3) {
    return [];
  }

  const ans: number[][] = [];
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    const first = nums[i];
    let left = i + 1,
      right = n - 1;
    if (first > 0) {
      return ans;
    }

    if (i > 0 && first === nums[i - 1]) {
      continue;
    }

    while (right > left) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        ans.push([nums[i], nums[left], nums[right]]);
        while (right > left && nums[left] === nums[left + 1]) {
          left++;
        }
        while (right > left && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return ans;
}
// @lc code=end

test("threeSum", () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
});
