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
int updatedBalanceFactor(Node *);
Node *L(Node *); // Rotate by left.
Node *R(Node *); // Rotate by left.
int MAX(int, int);
void main()
{
    Node *root = createdNode(3);
    Node *tree = toInsert(root, createdNode(0));
    tree = toInsert(root, createdNode(2));
    // toInsert(root, createdNode(2));
    // toInsert(root, createdNode(6));
    // printf("%d\n", root->value); // expect:2
    printf("%d\n", tree->left->value); // expect:0
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

int updatedBalanceFactor(Node *root)
{
    int leftHeight = root->left == NULL ? 0 : root->left->height;
    int rightHeight = root->right == NULL ? 0 : root->right->height;
    return leftHeight - rightHeight;
}

int MAX(int c1, int c2) // c for comparsion.
{
    return c1 > c2 ? c1 : c2;
}

Node *R(Node *root)
{
    Node *pivot = root->left;
    Node *pivotSubTree = root->left->right;
    pivot->right = root;
    root->left = pivotSubTree;
    pivot->height = 1 + updatedHeight(pivot);
    root->height = 1 + updatedHeight(root);
    printf("Rotate by R.\n");
    return pivot; // A new root.
}

Node *L(Node *root)
{
    Node *pivot = root->right;
    Node *pivotSubTree = root->right->left;
    pivot->left = root;
    root->right = pivotSubTree;
    pivot->height = 1 + updatedHeight(pivot);
    root->height = 1 + updatedHeight(root);
    printf("Rotate by L.\n");
    return pivot; // A new root.
}

Node *toInsert(Node *root, Node *nextNode)
{
    if (root == NULL)
    {
        printf("Inserted:%d \n", nextNode->value);
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
    root->height = 1 + updatedHeight(root);
    int balanceFactor = updatedBalanceFactor(root);
    printf("balanceFactor# %d : %d\n", root->value, balanceFactor);
    if (balanceFactor > 1 && nextNode->value < root->left->value)
    {
        root = R(root);
    }
    if (balanceFactor < -1 && nextNode->value > root->right->value)
    {
        root = L(root);
    }
    if (balanceFactor > 1 && nextNode->value > root->left->value) {
        root->left = L(root->left);
        root = R(root);
    }
    if (balanceFactor < -1 && nextNode->value < root->right->value) {
        root->right = R(root->right);
        root = L(root);
    }
    // printf("#%d\n", root->left);

    return root;
}