export interface ListNode {
  value: number;
  next?: ListNode;
  prev?: ListNode;
}

export const numberArrayToListNode = (numbers: number[]) => {
  const startNode: ListNode = { value: numbers[0] };
  numbers.slice(1).reduce(
    (prev, number) =>
      (prev.next = {
        value: number,
      }),
    startNode
  );

  return startNode;
};

export const listNodeToNumberArray = (node: ListNode) => {
  const numbers: number[] = [];
  let nodeTemp: ListNode | undefined = node;
  while (nodeTemp) {
    numbers.push(nodeTemp.value);
    nodeTemp = nodeTemp.next;
  }
  return numbers;
};
