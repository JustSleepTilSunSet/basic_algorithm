/**
 * 234. Palindrome Linked List
 * https://leetcode.com/problems/palindrome-linked-list/description/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let str1 ="";
    let str2 ="";
    while(head){
        str1 +=head.val;
        str2 +=head.val;
        head = head.next;
    }
    let str2Idx = str2.length-1;
    for(let str1Idx = 0;str1Idx<str1.length;str1Idx++){
        if(str1[str1Idx]!=str2[str2Idx])
            return false;
        str2Idx --;
    }
    return true;
};