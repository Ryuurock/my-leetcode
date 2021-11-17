export const twoSum = (nums: number[], target: number) => {
  const map = new Map();

  nums.forEach((num, index) => {
    const complement = target - num;
    if (map.has(complement)) {
      return [map.get(complement), index];
    }
    map.set(num, index);
  });

  return [];
};
