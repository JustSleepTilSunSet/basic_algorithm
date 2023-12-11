/**
 * The program shown a simple stack.
 */
#include <stdio.h>
#include <stdlib.h>

int MAX_SIZE = 5;
int stackIdx = 0;
void toShow(int *stack);
void toInsert(int *stack, int next);
void toPop(int *stack);

void main()
{
    int stack[MAX_SIZE];
    toInsert(stack, 1);
    toInsert(stack, 2);
    toInsert(stack, 3);
    toInsert(stack, 4);
    toInsert(stack, 5);
    toInsert(stack, 6); // throws stack is filled.
    toShow(stack);
    toPop(stack);
    toShow(stack);
    printf("\n");
    system("pause");
    return;
}

void toShow(int *stack)
{
    int index = 0;
    for (index = 0; index < MAX_SIZE; index++)
    {
        if (index < stackIdx)
            printf("stackIdx: %d\t", stack[index]);
        else
            printf("\tEmpty\t");
    }
    return;
}

void toPop(int *stack)
{
    printf("\nPop: %d\n", stack[--stackIdx]);
    return;
}

void toInsert(int *stack, int next)
{
    if (stackIdx < MAX_SIZE)
    {
        printf("The next value %d is inserted.\n", next);
        stack[stackIdx] = next;
        stackIdx++;
    }
    else
    {
        printf("\nThe stack is filled.\n");
    }
}