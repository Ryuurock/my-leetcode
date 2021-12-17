/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  nums.sort();
  const ans: number[][] = [];
  const numsLength = nums.length;
  for (let firstIndex = 0; firstIndex < numsLength; ++firstIndex) {
    if (firstIndex > 0 && nums[firstIndex] === nums[firstIndex - 1]) {
      continue;
    }

    // 题目要求 first + second + third = 0
    // 那么 -first = second + third
    // 所以这里是负数
    const target = -nums[firstIndex];
    let thirdIndex = nums.length - 1;

    for (
      let secondIndex = firstIndex + 1;
      secondIndex < numsLength;
      ++secondIndex
    ) {
      if (
        secondIndex > firstIndex + 1 &&
        nums[secondIndex] === nums[secondIndex - 1]
      ) {
        continue;
      }

      while (
        secondIndex < thirdIndex &&
        /* 这里随着thirdIndex的左移，和second的和会越来越小并接近target */
        nums[secondIndex] + nums[thirdIndex] > target
      ) {
        --thirdIndex;
      }

      if (secondIndex === thirdIndex) {
        break;
      }

      if (nums[secondIndex] + nums[thirdIndex] === target) {
        ans.push([nums[firstIndex], nums[secondIndex], nums[thirdIndex]]);
      }
    }
  }

  return ans;
}
// @lc code=end

test("threeSum", () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4])).toEqual([
    [-4, 0, 4],
    [-4, 1, 3],
    [-3, -1, 4],
    [-3, 0, 3],
    [-3, 1, 2],
    [-2, -1, 3],
    [-2, 0, 2],
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
});
