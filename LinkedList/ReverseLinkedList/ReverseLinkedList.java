import org.w3c.dom.Node;

class ReverseLinkedList {
    static class Node {
        int value = 0;
        Node next;

        public Node(int value) {
            this.value = value;
        }

        public int getValue() {
            return this.value;
        }
    }

    static class NodeAction {
        Node head;
        Node last;

        public NodeAction(Node head) {
            this.head = head;
            this.last = head;
        }

        public void showAll() {
            Node tmp = head;
            while (tmp != null) {
                System.out.println(tmp.value);
                tmp = tmp.next;
            }
        }

        public void toAdd(Node nextNode) {
            last.next = nextNode;
            last = last.next;
            return;
        }

        public Node getListHead() {
            return head;
        }
    }

    public static void main(String[] args) {
        // Initialize node head.
        Node head = new ReverseLinkedList.Node(1);
        NodeAction manager = new NodeAction(head);
        manager.toAdd(new Node(2));
        manager.toAdd(new Node(3));
        manager.toAdd(new Node(4));
        // manager.showAll();

        // To reverse.
        Node mainHead = manager.getListHead();
        Node current = mainHead;
        Node previous = mainHead;
        Node forward = current.next!=null?current.next:null;
        previous.next = null;
        int index = 1;
        while(forward!=null){
            current = forward;
            forward = forward.next;
            current.next = previous;
            previous = current;
        }
        while (previous != null) {
            System.out.print(previous.value + "->");
            previous = previous.next;
        }

    }

}