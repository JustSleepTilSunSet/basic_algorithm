#include <stdio.h>
#include <stdlib.h>
typedef struct Node
{
    int value;
    int height;
    struct Node *left;
    struct Node *right;
} Node;
Node *createdNode(int);
Node *toInsert(Node *, Node *);

void main()
{
    Node *root = createdNode(4);
    Node *tree = toInsert(root, createdNode(5));
    toInsert(root, createdNode(6));
    printf("%d %d \n", tree->right->value, tree->right->height);
    printf("%d ", tree->right->right->value);
}

Node *createdNode(int value)
{
    Node *node = malloc(sizeof(Node));
    node->value = value;
    node->left = NULL;
    node->right = NULL;
    node->height = 1;
    return node;
}

Node *toInsert(Node *root, Node *nextNode)
{
    if (root == NULL)
    {
        return nextNode;
    }
    if (root->value > nextNode->value)
    {
        root->left = toInsert(root->left, nextNode);
    }
    if (root->value < nextNode->value)
    {
        root->right = toInsert(root->right, nextNode);
    }
    return root;
}