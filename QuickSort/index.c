#include <stdio.h>
#include <stdlib.h>

int testcase[] = {3, 2, 5, 0, 1, 8, 7, 6, 9, 4}; // confirm
int testcaseLen = sizeof(testcase) / sizeof(int);
void swapByIdx(int, int); // confirm
void QuickSort(int, int, int);
void toShow(); // confirm
void main()
{
    // printf("%d ",testcase[8]);
    QuickSort(0, 0, testcaseLen - 1);
    toShow();
    system("pause");
}

void swapByIdx(int idx1, int idx2)
{
    int tp = testcase[idx1];
    testcase[idx1] = testcase[idx2];
    testcase[idx2] = tp;
}
void QuickSort(int currentIdx, int swapMarker, int pv)
{
    if (currentIdx == testcaseLen)
    {
        return;
    }
    if (testcase[currentIdx] > testcase[pv])
    {
        return QuickSort(currentIdx + 1, swapMarker, pv);
    }
    else if (testcase[currentIdx] <= testcase[pv])
    {
        swapMarker++;
        if (currentIdx > swapMarker)
        {
            swapByIdx(currentIdx, swapMarker);
            return QuickSort(currentIdx + 1, swapMarker, pv);
        }
        else
        {
            return QuickSort(currentIdx + 1, currentIdx, pv);
        }
    }
    return;
}

void toShow()
{
    int idx;
    for (idx = 0; idx < testcaseLen; idx++)
    {
        printf("%d ", testcase[idx]);
    }
}
