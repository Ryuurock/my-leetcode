import { addTwoNumbers } from "./add-two-numbers";

test("addTwoNumbers", () => {
  expect(addTwoNumbers([2, 4, 3], [5, 6, 4])).toEqual([7, 0, 8]);
  expect(addTwoNumbers([0], [0])).toEqual([0]);
  expect(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])).toEqual([
    8, 9, 9, 9, 0, 0, 0, 1,
  ]);
});
