# 105. Construct Binary Tree from Preorder and Inorder Traversal
- 我參考別人的解答，我看大多數的方法都是確認左右樹。故我完全是仰賴conquer and divide的方案，原因很簡單，唯一一個不變的真理是什麼？前序的第一個點必定是根，那麼只要再去中序findIndex就能切成左右兩棵樹。
所以，定義了兩個動作:
1. preorder shift(or pop(0))
2. findIndex
3. left 再做一次，因為shift出來的必定是根
3. right 再做一次，因為shift出來的必定是根