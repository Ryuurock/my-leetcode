/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  const ans: number[][] = [];
  intervals.sort((a, b) => a[0] - b[0]);
  for (let index = 0; index < intervals.length; index++) {
    // eslint-disable-next-line prefer-const
    let [leftStart, leftEnd] = intervals[index];

    for (let right = index + 1; right < intervals.length; right++) {
      const [rightStart, rightEnd] = intervals[right];
      if (rightStart <= leftEnd) {
        leftEnd = Math.max(leftEnd, rightEnd);
        index++;
      }

      if (rightStart > leftEnd) {
        break;
      }
    }

    ans.push([leftStart, leftEnd]);
  }

  return ans;
}
// @lc code=end

test("merge", () => {
  expect(
    merge([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ])
  ).toEqual([
    [1, 6],
    [8, 10],
    [15, 18],
  ]);
});
