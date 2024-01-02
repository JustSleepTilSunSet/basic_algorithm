#include <stdio.h>
#include <stdlib.h>

int testcase[] = {3, 2, 5, 0, 1, 8, 7, 6, 9, 4}; // confirm
int testcaseLen = sizeof(testcase) / sizeof(int);
void swapByIdx(int, int); // confirm
void QuickSort(int, int);
void toShow(); // confirm
void main()
{
    QuickSort(-1, testcaseLen - 1);
    toShow();
    system("pause");
}

void swapByIdx(int idx1, int idx2)
{
    int tp = testcase[idx1];
    testcase[idx1] = testcase[idx2];
    testcase[idx2] = tp;
}
void QuickSort(int left, int right)
{
    if (left >= right)
        return;
    int swapMarker = left;
    int currentIndex = left;
    for (currentIndex = left + 1; currentIndex <= right - 1; currentIndex++)
    {
        if (testcase[currentIndex] <= testcase[right])
        {
            swapMarker++;
            swapByIdx(currentIndex, swapMarker);
        }
    }
    swapByIdx(swapMarker + 1, right);
    QuickSort(left, swapMarker);
    QuickSort(swapMarker + 1, right);
}

void toShow()
{
    int idx;
    for (idx = 0; idx < testcaseLen; idx++)
    {
        printf("%d ", testcase[idx]);
    }
}
