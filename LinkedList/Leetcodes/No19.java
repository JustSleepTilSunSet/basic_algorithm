package LinkedList.Leetcodes;
/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class NO19 {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode current = head;
        int index = 1;
        int len = 0;
        // 計算倒序
        while(current!=null){
            len++;
            current = current.next;
        }
        int target = len - n +1;
        index = 1;
        ListNode previous = head;
        current = head;

        // 這我不知道怎麼並到下面的while,所以我當special case處理
        if(index == 1 && index == target){
            head = head.next;
        }

        //遇到後刪除節點
        while(current!=null){
            if(index==target){
                if(previous!=null){
                    previous.next = current==null?null:current.next;
                }
            }
            previous = current;
            current = current.next;
            index++;
        }
        return head;
    }
}