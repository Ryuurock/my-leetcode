/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start

enum State {
  Start,
  Signed,
  InNumber,
  End,
}

enum Char {
  Space,
  SignedChar,
  Number,
  Other,
}
/**
 * | 当前状态 | '' | +/- | number | other |
 * | ---- | ---- | ---- | ---- | ---- |
 * | start  | start | signed | inNumber | end |
 * | signed  | end | end | inNumber | end |
 * | inNumber  | end | end | inNumber | end |
 * | end  | end | end | end | end |
 */
const Table = [
  /* Char.Start */ [State.Start, State.Signed, State.InNumber, State.End],
  /* Char.Signed */ [State.End, State.End, State.InNumber, State.End],
  /* Char.InNumber */ [State.End, State.End, State.InNumber, State.End],
  /* Char.End */ [State.End, State.End, State.End, State.End],
];

function myAtoi(s: string): number {
  const getStateByChar = (char: string): Char => {
    if (char === " ") {
      return Char.Space;
    }

    if (char === "-" || char === "+") {
      return Char.SignedChar;
    }

    if (!Number.isNaN(+char)) {
      return Char.Number;
    }

    return Char.Other;
  };

  let answer = 0,
    sign = 1,
    state: State = State.Start;

  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    state = Table[state][getStateByChar(element)];
    if (state === State.InNumber) {
      answer = answer * 10 + +element;
    } else if (state === State.Signed) {
      sign = element === "+" ? 1 : -1;
    }
  }

  return Math.min(Math.max(answer * sign, (-2) ** 31), 2 ** 31 - 1);
}
// @lc code=end
test("myAtoi", () => {
  expect(myAtoi("words and 987")).toBe(0);
});
