/**
 * 23. Merge k Sorted Lists
 * https://leetcode.com/problems/merge-k-sorted-lists/description/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let result =  null;
    while (lists.length > 0) {
        let linkedList = lists.shift();
        let currnetLinkedList = linkedList?linkedList:null;
        if (currnetLinkedList) {
            // Pick first and re-queuing.
            let v1 = currnetLinkedList.val;
            let previous = currnetLinkedList;
            currnetLinkedList = currnetLinkedList.next;
            previous.next = null;
            lists.push(currnetLinkedList);

            // Check top.
            if (!result) {
                result = new ListNode(v1);
            } else {
                let nextOne = new ListNode(v1);
                // Change top.
                if(result.val >= nextOne.val){
                    let tmpResult = result;
                    result = nextOne;
                    result.next = tmpResult;
                }else{
                // Linear search.
                    let tmpResult = result;
                    while(tmpResult!=null){
                        let forwardVal = tmpResult.next?tmpResult.next.val:10001;//1001 is maximum of single element.
                        if(tmpResult.val<nextOne.val&&nextOne.val<=forwardVal){
                            nextOne.next = tmpResult.next;
                            tmpResult.next = nextOne;
                            break;
                        }
                        tmpResult = tmpResult.next;
                    }

                }
            }
        }
    }
    return result;
};