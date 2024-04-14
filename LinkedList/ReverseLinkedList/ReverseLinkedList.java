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
        Node head = new ReverseLinkedList.Node(0);
        NodeAction manager = new NodeAction(head);
        manager.toAdd(new Node(1));
        manager.toAdd(new Node(2));
        manager.toAdd(new Node(3));
        manager.toAdd(new Node(3));
        // manager.showAll();

        // To reverse.
        Node mainHead = manager.getListHead();
        Node current = mainHead;
        Node previous = mainHead;
        boolean isFirst = true;
        while (current != null) {
            // System.out.println(current.value);
            Node forward = current.next;
            // System.out.println(forward.value);
            if (isFirst) {
                previous.next = null;
                isFirst = !isFirst;
            }
            current = forward == null ? current : forward;
            forward = forward == null ? null : forward.next;// 確保未來指標永遠只在做最前面
            current.next = previous;
            previous = current;
            current = forward;
        }

        while (previous != null) {
            System.out.print(previous.value + "->");
            previous = previous.next;
        }

    }

}