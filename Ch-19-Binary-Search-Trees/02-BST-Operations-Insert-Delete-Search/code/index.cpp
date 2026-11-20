struct TreeNode { int val; TreeNode* left = nullptr; TreeNode* right = nullptr; explicit TreeNode(int x) : val(x) {} };

class BST {
public:
    TreeNode* search(TreeNode* root, int value) {
        while (root && root->val != value) root = value < root->val ? root->left : root->right;
        return root;
    }
    TreeNode* insert(TreeNode* root, int value) {
        if (!root) return new TreeNode(value);
        if (value < root->val) root->left = insert(root->left, value);
        else if (value > root->val) root->right = insert(root->right, value);
        return root;
    }
    TreeNode* erase(TreeNode* root, int value) {
        if (!root) return nullptr;
        if (value < root->val) root->left = erase(root->left, value);
        else if (value > root->val) root->right = erase(root->right, value);
        else {
            if (!root->left) { TreeNode* next = root->right; delete root; return next; }
            if (!root->right) { TreeNode* next = root->left; delete root; return next; }
            TreeNode* successor = root->right;
            while (successor->left) successor = successor->left;
            root->val = successor->val;
            root->right = erase(root->right, successor->val);
        }
        return root;
    }
};
