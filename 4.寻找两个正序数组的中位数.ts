/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(arr1: number[], arr2: number[]): number {
  const mergedArray: number[] = [];
  while (arr1.length && arr2.length) {
    mergedArray.push(arr1[0] < arr2[0] ? arr1.shift()! : arr2.shift()!);
  }

  mergedArray.push(...arr1, ...arr2);

  if (mergedArray.length % 2) {
    return mergedArray[Math.floor(mergedArray.length / 2)];
  }

  return (
    (mergedArray[mergedArray.length / 2 - 1] +
      mergedArray[mergedArray.length / 2]) /
    2
  );
}
// @lc code=end

test("findMedianSortedArrays", () => {
  expect(findMedianSortedArrays([3], [-2, -1])).toBe(-1);
});
