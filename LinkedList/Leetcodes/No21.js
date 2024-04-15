/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let result = new ListNode();
    let tmpResult = result;
    while(list1 && list2){
        let v1 = list1.val;
        let v2 = list2.val;
        if(v2>v1){
            tmpResult.next = new ListNode(v1);
            tmpResult = tmpResult.next;
            list1 = list1.next;
        }else{
            tmpResult.next = new ListNode(v2);
            tmpResult = tmpResult.next;
            list2 = list2.next;
        }
    }
    while(list1){
        tmpResult.next = new ListNode(list1.val);
        list1 = list1.next;
        tmpResult = tmpResult.next;
    }
    while(list2){
        tmpResult.next = new ListNode(list2.val);
        list2 = list2.next;
        tmpResult = tmpResult.next;
        
    }

    return result.next?result.next:list1;

};