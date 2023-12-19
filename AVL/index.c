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
int updatedHeight(Node *);
void main()
{
    Node *root = createdNode(4);
    Node *tree = toInsert(root, createdNode(5));
    toInsert(root, createdNode(6));
    printf("%d \n", root->height);
    printf("%d \n", root->right->height);
    printf("%d \n", root->right->right->height);
    system("pause");
    return;
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

int updatedHeight(Node *root)
{
    int leftHeight = root->left == NULL ? 0 : root->left->height;
    int rightHeight = root->right == NULL ? 0 : root->right->height;
    return leftHeight > rightHeight ? leftHeight : rightHeight;
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
        root->height = 1 + updatedHeight(root);
    }
    if (root->value < nextNode->value)
    {
        root->right = toInsert(root->right, nextNode);
        root->height = 1 + updatedHeight(root);
    }
    return root;
}