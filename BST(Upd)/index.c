#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int value;
    struct Node *left;
    struct Node *right;
} Node;

Node *toInsert(Node *, int);
void toSearched(Node *, int);
void toShow(Node *, char *);
Node *root = NULL;
void main()
{
    root = toInsert(root, 1);
    toInsert(root, 2);
    toInsert(root, 0);
    toInsert(root, 3);
    toShow(root, "root");
    toSearched(root, 3);
    toSearched(root, 4);
    system("pause");
    return;
}

Node *toInsert(Node *root, int value)
{
    if (root == NULL)
    {
        Node *temp = malloc(sizeof(Node));
        temp->value = value;
        temp->left = NULL;
        temp->right = NULL;
        return temp;
    }
    if (root->value < value)
    {
        root->right = toInsert(root->right, value);
        printf("\n[%d] be inserted right.\n", root->right->value);
    }
    else if (root->value > value)
    {
        root->left = toInsert(root->left, value);
        printf("\n[%d] be inserted left.\n", root->left->value);
    }
    return root;
}

void toShow(Node *root, char *content)
{
    if (root != NULL)
    {
        printf("\n[%s] [%d].\n", content, root->value);
    }
    if (root->left != NULL)
        toShow(root->left, "left");

    if (root->right != NULL)
        toShow(root->right, "right");
    return;
}

void toSearched(Node *root, int target)
{
    if (root != NULL)
    {
        if (target > root->value)
        {
            return toSearched(root->right, target);
        }
        else if (target < root->value)
        {
            return toSearched(root->left, target);
        }
        if (root->value == target)
        {
            printf("\nThe value is exist in the tree.\n");
            return;
        }
    }
    printf("\n[%d] not found.\n", target);
    return;
}