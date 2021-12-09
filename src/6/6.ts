/**
 * 
 * P     I    N
   A   L S  I G
   Y A   H R
   P     I
 * 正常直觉实现
 */
export const convertZMine = (str: string, row: number) => {
  if (row < 2) {
    return str;
  }
  const strBox: string[][] = new Array(row).fill(0).map(() => []);
  const strs = str.split("");

  let columnIndex = 0;

  const viewRow = row - 1;

  while (strs.length) {
    const rowIndex = columnIndex % viewRow;
    for (let index = 0; index < row; index++) {
      if (columnIndex % viewRow === 0 || index === viewRow - rowIndex) {
        strBox[index].push(strs.shift()!);
      } else {
        strBox[index].push("");
      }
    }
    columnIndex += 1;
  }

  return strBox.flat().join("");
};
