#include <stdio.h>
#include <stdlib.h>
#define MAX_SIZE 5 // macro definition
typedef struct Node
{
    int value;
    struct Node *next;
} Node;
Node *toInsert(int);
void toShow();
void toShift();
Node *root = NULL;
Node *current = NULL;
int currentSize = 1;
void main()
{
    toInsert(1);
    toInsert(2);
    toInsert(3);
    toInsert(4);
    toInsert(5);
    toInsert(6);
    toShow(root);
    toShift();
    toShift();
    toShift();
    toShift();
    toShift();
    toShow(root);
}

Node *toInsert(int nextValue)
{
    if (root == NULL)
    {
        printf("[%d] is a root in the queue. \n", nextValue);
        root = malloc(sizeof(Node));
        root->value = nextValue;
        current = root;
        return root;
    }
    else if (currentSize == MAX_SIZE)
    {
        printf("Inserted [%d] is failure, the queue is filled. \n", nextValue);
        return NULL;
    }
    else
    {
        printf("[%d] has been inserted into the queue. \n", nextValue);
        Node *nextNode = malloc(sizeof(Node));
        nextNode->value = nextValue;
        nextNode->next = NULL;
        current->next = nextNode;
        current = current->next;
        currentSize++;
    }
}

void toShow(Node *searching)
{
    if(searching == NULL){
        printf("The queue is empty.");
        return;
    }
    else if (searching->next == NULL)
    {
        printf("[%d]", searching->value);
        return;
    }
    else
    {
        printf("[%d] ->", searching->value);
        toShow(searching->next);
        // printf("\n"); // Count of new line growth follow the length of link.
    }
}

void toShift()
{
    printf("\n");
    printf("Shift:[%d]", root->value);
    Node* temp = root->next;
    free(root);
    currentSize--;
    root = temp;
    printf("\n");
}