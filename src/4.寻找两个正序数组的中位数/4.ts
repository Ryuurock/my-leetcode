/**
 * 一般解法
 */
export const mine = (arr1: number[], arr2: number[]) => {
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
};
