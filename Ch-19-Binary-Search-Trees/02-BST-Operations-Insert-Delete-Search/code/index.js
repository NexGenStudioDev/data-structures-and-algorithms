class Node { constructor(value) { this.value = value; this.left = null; this.right = null; } }
function insert(root, value) {
  if (root === null) return new Node(value);
  if (value < root.value) root.left = insert(root.left, value);
  else if (value > root.value) root.right = insert(root.right, value);
  return root; // duplicates are ignored
}
function search(root, value) {
  if (root === null || root.value === value) return root;
  return value < root.value ? search(root.left, value) : search(root.right, value);
}
function minimum(node) { while (node.left !== null) node = node.left; return node; }
function remove(root, value) {
  if (root === null) return null;
  if (value < root.value) root.left = remove(root.left, value);
  else if (value > root.value) root.right = remove(root.right, value);
  else {
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;
    const successor = minimum(root.right);
    root.value = successor.value;
    root.right = remove(root.right, successor.value);
  }
  return root;
}
function inorder(root, output = []) { if (root) { inorder(root.left, output); output.push(root.value); inorder(root.right, output); } return output; }
if (typeof module !== "undefined") module.exports = { Node, insert, search, remove, inorder };
if (typeof require !== "undefined" && require.main === module) { let root = null; for (const x of [8,3,10,1,6]) root = insert(root,x); root = remove(root,3); console.log(inorder(root)); }
