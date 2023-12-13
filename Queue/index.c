#include <stdio.h>
#include <stdlib.h>
#define MAX_SIZE 5 // macro definition
int queue[MAX_SIZE];
int nextIdx = 0;
int readyIdx = 0; // ready to shift.
void toInsert(int);
void toShow(int);
void toShift();
void rearrangeQueue();

void main()
{
    toInsert(1);
    toInsert(2);
    toInsert(3);
    toInsert(4);
    toShift();
    printf("\n");
    toShift();
    toShow(readyIdx);
    system("echo("); // equals printf("\n");
    system("pause");
    return;
}

void toInsert(int nextValue)
{
    if (nextIdx == MAX_SIZE)
    {
        printf("Inserted [%d] is failure. Queue is filled.\n", nextValue);
        return;
    }
    printf("Add %d to queue. \n", nextValue);
    queue[nextIdx++] = nextValue;
}

/**
 * @param searchIdx The index is for initial searching position in the array.
 */
void toShow(int searchIdx)
{
    if (searchIdx == nextIdx - 1)
    {
        printf("[%d] ", queue[searchIdx]);
        return;
    }
    else
    {
        printf("[%d] ->", queue[searchIdx]);
        return toShow(searchIdx + 1);
    }
}

void toShift()
{
    if (readyIdx == nextIdx)
    {
        printf("\nQueue is empty.");
        return;
    }
    printf("\nShift: [%d]\n", queue[readyIdx]);
    readyIdx++;
    rearrangeQueue();
}

void rearrangeQueue()
{
    int start = 0;
    for (start = 0; start < nextIdx; start++)
    {
        queue[start] = queue[start + 1];
    }
    nextIdx --;
    readyIdx = 0;
}