// C done.
// R done.
// U done.
// D done.

import java.util.Arrays;
import java.util.Collections;

class MaxHeap {
    static Integer[] data = { 9, 3, 1, 2, 7 };
    static int SIZE = data.length;

    // Odd index（Left node） with parent node equals (i - 1) / 2。
    // Even index（right node）with parent node equals (i / 2) - 1。
    public static int searchParent(int index) {
        if (index % 2 == 1 || index == 0) {// for left node.
            return (index - 1) / 2;
        } else {
            return (index) / 2 - 1;// for right node.
        }
    }

    public static void create(int value) {
        Integer[] newerData = new Integer[SIZE + 1];
        int index = 0;
        while (index < data.length) {
            newerData[index] = data[index];
            index++;
        }
        // Current index point to last position.
        newerData[index] = value;
        searchParent(index);
        data = newerData.clone();
        heapifyUp(index);
        SIZE = newerData.length; // updated SIZE.
    }

    // The startIndex indicates swap trigger index.
    public static void heapifyUp(int startIndex) {
        int rootIdx = searchParent(startIndex);
        int rootValue = data[rootIdx];
        int compareValue = data[startIndex];
        if (compareValue > rootValue) {
            int tmp = rootValue;
            data[rootIdx] = compareValue;
            data[startIndex] = tmp;
            heapifyUp(rootIdx);
        }
        return;
    }

    public static void heapifyDown(int rootIndex) {
        int left = 2 * rootIndex + 1;
        int right = 2 * rootIndex + 2;
        // Left node treat as new root.
        if (left < SIZE) {
            if (data[rootIndex] < data[left]) {
                int tmp = data[left];
                data[left] = data[rootIndex];
                data[rootIndex] = tmp;
                heapifyDown(left);
            }
        }

        // Right node treat as new root.
        if (right < SIZE) {
            if (data[rootIndex] < data[right]) {
                int tmp = data[right];
                data[right] = data[rootIndex];
                data[rootIndex] = tmp;
                heapifyDown(right);
            }
        }
        return;
    }

    public static void updated(int updatedIdx, int toValue) {
        System.out.println("Index: " + updatedIdx + " will be updated to " + toValue);
        if (updatedIdx < 0 || updatedIdx >= SIZE) {
            return;
        }
        data[updatedIdx] = toValue;
        int parentIndex = searchParent(updatedIdx);
        if (data[updatedIdx] > data[parentIndex]) {
            System.out.println("Called heapifyUp");
            heapifyUp(updatedIdx);
        } else {
            System.out.println("Called heapifyDown");
            heapifyDown(updatedIdx);
        }
    }

    public static void deleted(int deleteIndex) {
        System.out.println("Index: " + deleteIndex + " will be deleted.");
        if (deleteIndex < 0 || deleteIndex >= SIZE) {
            System.out.println("Invalid operation.");
            return;
        }
        int left = 2 * deleteIndex + 1 < SIZE ? 2 * deleteIndex + 1 : -1;
        int right = 2 * deleteIndex + 2 < SIZE ? 2 * deleteIndex + 2 : -1;
        if (left < 0 && right > 0) {
            data[deleteIndex] = data[right];
            data[right] = null;
        } else if (right < 0 && left > 0) {
            data[deleteIndex] = data[left];
            data[left] = null;
        } else if (left > 0 && right > 0) {
            if (data[left] > data[right]) {
                data[deleteIndex] = data[left];
                // aligned to left.
                data[left] = data[right];
                data[right] = null;
            }
            if (data[left] < data[right]) {
                data[deleteIndex] = data[right];
                data[right] = null;
            }
        }
    }

    public static void main(String[] args) {
        // We assume the data was sorted,and the define is a MaxHeap.
        Arrays.sort(data, Collections.reverseOrder());
        System.out.println("---- created ---");
        create(23);
        for (int index = 0; index < data.length; index++) {
            System.out.println("Get " + data[index] + " parent: " + data[searchParent(index)]);
        }
        System.out.println("---- updated ---");
        updated(0, -1);
        for (int index = 0; index < data.length; index++) {
            System.out.println("Get " + data[index] + " parent: " + data[searchParent(index)]);
        }
        System.out.println("---- deleted ---");
        deleted(1);
        for (int index = 0; index < data.length; index++) {
            System.out.println("Get " + data[index] + " parent: " + data[searchParent(index)]);
        }
    }
}
