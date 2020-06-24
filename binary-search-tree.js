export const comparator = (a, b) => {
  if (a === b) {
    return 0;
  }

  return a < b ? -1 : 1;
};

export class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree {
  constructor(compareFunc = comparator) {
    this.root = null;
    this.comparator = compareFunc;
  }

  /**
   * Add a node
   * @param {*} value 
   * @time complexity: O(LOG N) where N is the size of the tree
   * @space complexity: O(1)
   */
  insert(value) {
    // CREATE AN NEW NODE
    const node = new Node(value);

    // IF THERE IS NO ROOT, SET THE NEW NODE AS THE ROOT
    if (this.root === null) {
      this.root = node;
      return;
    }

    // INSERT THE NEW NODE IN SUBTREE
    this._insertNode(this.root, node);
  }

  /**
   * Insert a node in a given parent
   * @param {Node} parent 
   * @param {Node} node 
   * @time complexity: O(LOG N) where N is the size of the parent node
   * @space complexity: O(1)
   */
  _insertNode(parent, node) {
    // IF THE NODE IS LESS THAN THE PARENT
    if (this.comparator(node.value, parent.value) == -1) {
      // IF REACH THE LEAF, ADD TO IT
      if (parent.left === null) {
        parent.left = node;
        return;
      }

      // CONTINUE INSERT INTO LEFT SUBTREE
      return this._insertNode(parent.left, node);
    }

    // IF REACH THE LEFT, ADD TO IT
    if (parent.right === null) {
      parent.right = node;
      return;
    }

    // CONTINUE INSERT INTO RIGHT SUBTREE
    return this._insertNode(parent.right, node);
  }

  /**
   * Traversing the tree from left to right, meaning from the smallest to the largest
   * @param {function} callback
   * @time complexity: O(N) where N is the size of the tree
   * @space complexity: O(N) where N is the size of the tree
   */
  inOrderTraverse(callback) {
    this._inOrderTraverseNode(this.root, callback);
  }

  _inOrderTraverseNode(node, callback) {
    if (node === null) {
      return;
    }

    this._inOrderTraverseNode(node.left, callback);
    callback(node.value);
    this._inOrderTraverseNode(node.right, callback);
  }

  /**
   * Traversing the tree from left to right
   * Difference between pre-order and in-order traverse, 
   * is that pre-order traverse visit the root first,
   * and then the left node, finally the right node
   * @param {function} callback
   * @time complexity: O(N) where N is the size of the tree
   * @space complexity: O(N) where N is the size of the tree
   */
  preOrderTraverse(callback) {
    this._preOrderTraverseNode(this.root, callback);
  }

  _preOrderTraverseNode(node, callback) {
    if (node === null) {
      return;
    }

    callback(node.value);
    this._preOrderTraverseNode(node.left, callback);
    this._preOrderTraverseNode(node.right, callback);
  }

  /**
   * Traversing the tree from bottom up
   * Visit the left node and then the right node, finally the root node
   * @param {function} callback
   * @time complexity: O(N) where N is the size of the tree
   * @space complexity: O(N) where N is the size of the tree
   */
  postOrderTraverse(callback) {
    this._postOrderTraverseNode(this.root, callback);
  }

  _postOrderTraverseNode(node, callback) {
    if (node === null) {
      return;
    }

    this._postOrderTraverseNode(node.left, callback);
    this._postOrderTraverseNode(node.right, callback);
    callback(node.value);
  }

  /**
   * Find the minimum value
   * @return {*}
   * @time complexity: O(LOG N) where N is the size of the tree
   * @space complexity: O(1)
   */
  min() {
    return this._minNode(this.root);
  }

  _minNode(node) {
    if (node === null) {
      return null;
    }

    while (node && node.left !== null) {
      node = node.left;
    }

    return node.value;
  }

  /**
   * Find the maximum value
   * @return {*}
   * @time complexity: O(LOG N) where N is the size of the tree
   * @space complexity: O(1)
   */
  max() {
    return this.maxNode(this.root);
  }

  maxNode(node) {
    if (node === null) {
      return null;
    }

    while (node && node.right !== null) {
      node = node.right;
    }

    return node.value;
  }

  /**
   * Check whether or not the tree contains the value
   * @param {*} value 
   * @return {boolean}
   * @time complexity: O(LOG N) where N is the size of the tree
   * @space complexity: O(LOG N) where N is the size of the tree
   */
  search(value) {
    return this._searchNode(this.root, value);
  }

  _searchNode(node, value) {
    if (node === null) {
      return false;
    }

    const compare = this.comparator(value, node.value);

    if (compare === -1) {
      return this._searchNode(node.left, value);
    }

    if (compare === 1) {
      return this._searchNode(node.right, value);
    }

    return true;
  }

  /**
   * Remove the value from the tree
   * @param {*} value 
   * @return {Node}
   * @time complexity: O(LOG N) where N is the size of the tree
   * @space complexity: O(LOG N) where N is the size of the tree
   */
  remove(value) {
    this.root = this._removeNode(this.root, value);
  }

  _removeNode(node, value) {
    if (node === null) {
      return null;
    }

    const compare = this.comparator(value, node.value);

    if (compare === -1) {
      node.left = this._removeNode(node.left, value);
      return node;
    }

    if (compare === 1) {
      node.right = this._removeNode(node.right, value);
      return node;
    }

    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }

    if (node.left === null) {
      node = node.right;
      return node;
    }

    if (node.right === null) {
      node = node.left;
      return node;
    }

    const aux = this._findMinNode(node.right);

    node.value = aux.value;
    node.right = this._removeNode(node.right, aux.value);
    return node;
  }

  /**
   * Find the minimum value node
   * @param {Node} node 
   * @time complexity: O(LOG N) where N is the size of the tree
   * @space complexity: O(1)
   */
  _findMinNode(node) {
    if (node === null) {
      return null;
    }

    while (node && node.left !== null) {
      node = node.left;
    }

    return node;
  }
}