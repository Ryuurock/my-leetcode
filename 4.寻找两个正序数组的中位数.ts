/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(arr1: number[], arr2: number[]): number {
  const mergedArray: number[] = [];
  while (arr1.length && arr2.length) {
    const arr1Item = arr1.shift()!;
    const arr2Item = arr2.shift()!;
    if (arr1Item < arr2Item) {
      mergedArray.push(arr1Item, arr2Item);
    } else {
      mergedArray.push(arr2Item, arr1Item);
    }
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
