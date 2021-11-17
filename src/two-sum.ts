/**
 * 这真是太妙了
 * @param nums
 * @param target
 * @returns
 */
export const twoSum = (nums: number[], target: number) => {
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
};

/**
 * 我只会这么写 还是copilot写的
 *
 * @param nums
 * @param target
 * @returns
 */
export const twoSumMine = (nums: number[], target: number) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
