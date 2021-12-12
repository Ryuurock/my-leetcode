/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  let returns: number[] = [];

  nums.some((num, index) => {
    const complement = target - num;
    if (map.has(complement)) {
      returns = [map.get(complement), index];
      return true;
    }
    map.set(num, index);
  });

  return returns;
}
// @lc code=end
