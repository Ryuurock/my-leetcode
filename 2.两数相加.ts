/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

import { ListNode, numberArrayToListNode } from "./utils";

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(nums1: number[], nums2: number[]) {
  let node1: ListNode | undefined = numberArrayToListNode(nums1);
  let node2: ListNode | undefined = numberArrayToListNode(nums2);

  const result: number[] = [];

  let carry = 0;

  while (node1 || node2) {
    const value = (node1?.value ?? 0) + (node2?.value ?? 0) + carry;
    carry = value >= 10 ? 1 : 0;

    result.push(value % 10);

    node1 = node1?.next;
    node2 = node2?.next;
  }
  if (carry) {
    result.push(carry);
  }

  return result;
}
// @lc code=end
