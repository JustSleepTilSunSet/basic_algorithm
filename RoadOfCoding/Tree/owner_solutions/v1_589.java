/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {
    public List<Integer> preorder(Node root) {
        ArrayList<Integer> result = new ArrayList<Integer>();
        dfs(root,result);
        return result;
    }
    public void dfs(Node node, ArrayList<Integer> result){
        if(node == null)
            return;
        result.add(node.val);
        for(int index = 0;index<node.children.size();index++){
            dfs(node.children.get(index),result);
        }
    }
}