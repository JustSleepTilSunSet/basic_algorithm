/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode doubleIt(ListNode head) {
        // TODO: check head haven't next item.
        ListNode previous = head;
        ListNode forward = head.next;
        if(forward == null ){
            // special case.
            while(previous!=null){
                previous.val = previous.val *2;
                int carry = previous.val/10;
                previous.val = previous.val%10;
                if(previous.next == null && carry >0){
                    previous.next = new ListNode(carry);
                    ListNode tmp = previous.next;
                    previous.next = null;
                    tmp.next = previous;
                    return tmp;
                }
                previous = previous.next;
            }
            return head;
        }
        // to reverse.
        previous.next = null;
        while(forward!=null){
            ListNode tmpForward = forward;
            forward = forward.next;
            tmpForward.next = previous;
            previous = tmpForward;
        }

        // to caculate.
        int carry = 0;
        ListNode tp = previous;
        ListNode tpF = previous.next;
        while(previous!=null){
            // Caculation.
            previous.val = previous.val*2+carry;
            carry = previous.val/10;
            previous.val = previous.val%10;
            if(previous.next == null && carry>0){
               previous.next = new ListNode(carry);
               break;
            }else{
                previous = previous.next;
            }
        }

        // to reverse.
        tp.next = null;
        while(tpF!=null){
            ListNode tmpForward = tpF;
            tpF = tpF.next;
            tmpForward.next = tp;
            tp = tmpForward;
        }
        return tp;
    }
}