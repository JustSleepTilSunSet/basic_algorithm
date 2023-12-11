#include <stdio.h>
#include <stdlib.h>
typedef struct Node
{
    int value;
    struct Node *next;
} Node;
Node *InsertNodeWithValue(int nextValue);
Node *stackRoot = NULL;
Node *currPhase = NULL;
void toShow();
void toPop();
int MAX_SIZE = 5;
int CURR_SIZE = 1;
void main()
{
    InsertNodeWithValue(1);
    InsertNodeWithValue(2);
    InsertNodeWithValue(3);
    InsertNodeWithValue(4);
    InsertNodeWithValue(5);
    InsertNodeWithValue(6);
    toShow();
    toPop();
    toShow();
    system("echo the process done.");
    system("pause");
    return;
}

Node *InsertNodeWithValue(int nextValue)
{
    if (stackRoot == NULL)
    {
        printf("\nDetect the stackRoot is NULL,then create a new one.\n");
        printf("\n %d as root.\n", nextValue);
        stackRoot = malloc(sizeof(Node));
        stackRoot->value = nextValue;
        stackRoot->next = NULL;
        currPhase = stackRoot;
        return stackRoot;
    }
    else if (CURR_SIZE < MAX_SIZE)
    {
        printf("\nAdd %d to stackRoot.\n", nextValue);
        Node *temp = malloc(sizeof(Node));
        temp->value = nextValue;
        currPhase->next = temp;
        currPhase = currPhase->next;
        CURR_SIZE++;
    }
    else
    {
        printf("\nThe stackRoot is filled.\n");
    }
}

void toShow()
{
    Node *search = stackRoot;
    while (!(search == currPhase))
    {
        printf("%d ->", search->value);
        search = search->next;
    }
    printf("%d", search->value);
    printf("\n");
}

void toPop()
{
    Node *search = stackRoot;
    while (!(search->next == currPhase))
    {
        search = search->next;
    }
    printf("\nPop: %d \n", search->next->value);
    free(search->next);
    search->next = NULL;
    CURR_SIZE--;
    currPhase = search;
}