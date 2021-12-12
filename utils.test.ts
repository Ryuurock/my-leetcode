import { numberArrayToListNode, listNodeToNumberArray } from "./utils";

test("numberArrayToNodeList", () => {
  const node = numberArrayToListNode([9, 8, 2, 7]);
  expect(node.value).toBe(9);
  expect(node.next?.value).toBe(8);
  expect(node.next?.next?.next).toEqual({ value: 7 });
});

test("listNodeToNumberArray", () => {
  expect(
    listNodeToNumberArray({
      value: 3,
      next: {
        value: 2,
        next: {
          value: 0,
        },
      },
    })
  ).toEqual([3, 2, 0]);
});
