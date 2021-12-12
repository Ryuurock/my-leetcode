/*
 * @lc app=leetcode.cn id=6 lang=typescript
 *
 * [6] Z 字形变换
 */

// @lc code=start
function convert(str: string, row: number): string {
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
}
// @lc code=end
