import BinarySearchTree, { Node } from './binary-search-tree';

const BALANCE = {
  BALANCED: 0,
  UNBALANCED_LEFT: 1,
  UNBALANCED_RIGHT: 2,
  SLIGHTLY_UNBALANCED_LEFT: 3,
  SLIGHTLY_UNBALANCED_RIGHT: 4,
};

export default class AVLTree extends BinarySearchTree {
  constructor(compareFunc) {
    super(compareFunc);
  }

  getNodeHeight(node) {
    if (node === null) {
      return -1;
    }

    return 1 + Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right));
  }

  getBalance(node) {
    const height = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);

    switch (height) {
      case -2:
        return BALANCE.UNBALANCED_RIGHT;
      case -1:
        return BALANCE.SLIGHTLY_UNBALANCED_RIGHT;
      case 2:
        return BALANCE.UNBALANCED_LEFT;
      case 1:
        return BALANCE.SLIGHTLY_UNBALANCED_LEFT;
      default:
        return BALANCE.BALANCED;
    }
  }
}