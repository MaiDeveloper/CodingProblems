class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const node = new Node(key);

    if (this.root === null) {
      this.root = node;
      return;
    }

    this.insertNode(root, node);
  }

  insertNode(parent, node) {
    if (node.key < parent.key) {
      if (parent.left === null) {
        parent.left = node;
        return;
      }

      return this.insertNode(parent.left, node);
    }

    if (parent.right === null) {
      parent.right = node;
      return;
    }

    return this.insertNode(parent.right, node);
  }

  search(key) {

  }

  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  inOrderTraverseNode(node, callback) {
    if (node === null) {
      return;
    }

    this.inOrderTraverseNode(node.left, callback);
    callback(node.key);
    this.inOrderTraverseNode(node.right, callback);
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  preOrderTraverseNode(node, callback) {
    if (node === null) {
      return;
    }

    callback(node.key);
    this.preOrderTraverseNode(node.left, callback);
    this.preOrderTraverseNode(node.right, callback);
  }

  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }

  postOrderTraverseNode(node, callback) {
    if (node === null) {
      return;
    }

    this.postOrderTraverseNode(node.left, callback);
    this.postOrderTraverseNode(node.right, callback);
    callback(node.key);
  }

  min() {
    return this.minNode(this.root);
  }

  minNode(node) {
    if (node === null) {
      return null;
    }

    while (node && node.left !== null) {
      node = node.left;
    }

    return node.key;
  }

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

    return node.key;
  }

  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    if (node === null) {
      return false;
    }

    if (key < node.key) {
      return this.searchNode(node.left, key);
    }

    if (key > node.key) {
      return this.searchNode(node.right, key);
    }

    return true;
  }

  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    if (node === null) {
      return null;
    }

    if (key < node.key) {
      node.left = this.removeNode(node.left, key);
      return node;
    }

    if (key > node.key) {
      node.right = this.removeNode(node.right, key);
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

    const aux = this.findMinNode(node.right);

    node.key = aux.key;
    node.right = this.removeNode(node.right, aux.key);
    return node;
  }

  findMinNode(node) {
    if (node === null) {
      return null;
    }

    while (node && node.left !== null) {
      node = node.left;
    }

    return node;
  }
}