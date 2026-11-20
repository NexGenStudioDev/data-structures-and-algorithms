function isValidBST(root, low = -Infinity, high = Infinity) {
  if (root === null) return true;
  if (root.value <= low || root.value >= high) return false;
  return isValidBST(root.left, low, root.value) && isValidBST(root.right, root.value, high);
}
function lowestCommonAncestor(root, a, b) {
  while (root !== null) {
    if (a < root.value && b < root.value) root = root.left;
    else if (a > root.value && b > root.value) root = root.right;
    else return root;
  }
  return null;
}
if (typeof module !== "undefined") module.exports = { isValidBST, lowestCommonAncestor };
