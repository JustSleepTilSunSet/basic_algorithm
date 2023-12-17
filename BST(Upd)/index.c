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
Node *toDeleteNodeByTarget(Node *, Node *, int);
Node *root = NULL;
Node *goal = NULL;

void main()
{
    Node *tp = malloc(sizeof(Node));
    root = toInsert(root, 1);
    toInsert(root, 2);
    toInsert(root, 0);
    toInsert(root, 3);
    toInsert(root, 4);
    toInsert(root, -1);
    toInsert(root, -2);
    toShow(root, "root");
    toSearched(root, 3);
    // toSearched(root, 5);
    toDeleteNodeByTarget(root, tp, 3);
    toDeleteNodeByTarget(root, tp, -1);
    toShow(root, "root");
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
Node *LRSearched(Node *root)
{
    if (root->right == NULL)
    {
        return root;
    }
    return LRSearched(root->right);
}

Node *RLSearched(Node *root)
{
    if (root->left == NULL)
    {
        return root;
    }
    return RLSearched(root->left);
}

Node *toDeleteNodeByTarget(Node *root, Node *forward, int target)
{
    if (target > root->value && forward->value == target)
    {
        printf("\n root %d.\n", root->value);
        root->right = forward->right;
        if (root->left != NULL)
        {
            Node *lastRight = LRSearched(root->left);
            lastRight->right = forward->left;
        }
        else
        {
            root->left = forward->left;
        }
        return root;
    }
    if (target < root->value && forward->value == target)
    {
        printf("\n root %d.\n", root->value);
        if (forward->right != NULL)
        {
            Node *lastLeft = RLSearched(forward->right);
            lastLeft->left = forward->left;
            root->left = forward->right;
        }
        else
        {
            root->left = forward->left;
        }
        return root;
    }
    if (target > root->value)
    {
        return toDeleteNodeByTarget(root->right, root->right->right, target);
    }
    else if (target < root->value)
    {
        return toDeleteNodeByTarget(root->left, root->left->left, target);
    }
    return root;
}