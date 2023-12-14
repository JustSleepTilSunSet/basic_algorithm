#include <stdio.h>
#include <stdlib.h>
// #include <string.h>
enum Direct
{
    toward = 1,
    backward = 2
};
typedef struct Node
{
    int value;
    struct Node *previous;
    struct Node *forward;
} Node;
Node *root = NULL;
Node *curr = NULL;
Node *toInsert(Node *, int);
void toShow(Node *, int);
enum Direct TOWARD = toward;
enum Direct BACKWARD = backward;

void main()
{
    root = toInsert(root, 1);
    toInsert(root, 2);
    toInsert(root, 3);
    toInsert(root, 4);
    toShow(root, TOWARD);
    toShow(root, BACKWARD);
    system("pause");
}

Node *toInsert(Node *root, int nextValue)
{
    if (root == NULL)
    {
        root = malloc(sizeof(Node));
        root->value = nextValue;
        root->previous = NULL;
        root->forward = NULL;
        curr = root;
    }
    else
    {
        Node *temp = malloc(sizeof(Node));
        temp->value = nextValue;
        temp->previous = curr;
        temp->forward = NULL;
        curr->forward = temp;
        curr = curr->forward;
    }
}

void toShow(Node *root, int order)
{
    if (order != TOWARD && order != BACKWARD)
    {
        printf("\nInvalid order.\n");
        return;
    }
    printf("Print order: %s\t", order == TOWARD ? "Toward" : "Backward");
    // if (!strcmp(order, "toward") || !strcmp(order, "reverse"))
    // {
    //     printf("Invalid order.");
    //     return;
    // }
    if (order == BACKWARD)
    {
        Node *search = curr;
        while (search->previous != NULL)
        {
            printf("[%d]->", search->value);
            search = search->previous;
        }
        printf("[%d].\n", root->value);
        return;
    }

    if (order == TOWARD)
    {
        Node *search = root;
        while (search->forward != NULL)
        {
            printf("[%d]->", search->value);
            search = search->forward;
        }
        printf("[%d].\n", search->value);
        return;
    }
}