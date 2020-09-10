// O(n) time | O(n) space
function invertBinaryTree(tree) {
  let queue = [];
  while (queue.length) {
    let current = queue.unshift();

    if (current == null) continue;

    swapLeftAndRight(current);
    queue.push(current.left);
    queue.push(current.right);
  }
}

function swapLeftAndRight(tree) {
  [tree.right, tree.left] = [tree.left, tree.right];
}

// O(n) time | O(d) space
function invertBinaryTree(tree) {
  if (tree == null) return;

  swapLeftAndRight(tree);
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}
