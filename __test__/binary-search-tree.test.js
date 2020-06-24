import BinarySearchTree, { Node } from '../binary-search-tree';

describe('Binary Search Tree', () => {

  let binaryTree;

  beforeEach(() => {
    binaryTree = new BinarySearchTree();
    binaryTree.insert(4);
    binaryTree.insert(2);
    binaryTree.insert(1);
    binaryTree.insert(3);
    binaryTree.insert(6);
    binaryTree.insert(5);
    binaryTree.insert(7);
  });

  describe('insert', () => {

    let myTree;

    beforeAll(() => {
      myTree = new BinarySearchTree();
    });

    test('should add to the root', () => {
      myTree.insert(5);
      expect(myTree.root).toBeInstanceOf(Node);
      expect(myTree.root.value).toEqual(5);
    });

    test('should add to the left node', () => {
      myTree.insert(4);
      expect(myTree.root.left).toBeInstanceOf(Node);
      expect(myTree.root.left.value).toEqual(4);
    });

    test('should add to the right node', () => {
      myTree.insert(6);
      expect(myTree.root.right).toBeInstanceOf(Node);
      expect(myTree.root.right.value).toEqual(6);
    });
  });

  describe('inOrderTraverse', () => {
    test('should traverse from left to right, from the smallest to the largest', () => {
      const nums = [];
      binaryTree.inOrderTraverse(val => nums.push(val));
      expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
  });

  describe('preOrderTraverse', () => {
    test('should traverse from the root, left, and then right', () => {
      const nums = [];
      binaryTree.preOrderTraverse(val => nums.push(val));
      expect(nums).toEqual([4, 2, 1, 3, 6, 5, 7]);
    });
  });

  describe('postOrderTraverse', () => {
    test('should traverse from the root, left, and then right', () => {
      const nums = [];
      binaryTree.postOrderTraverse(val => nums.push(val));
      expect(nums).toEqual([1, 3, 2, 5, 7, 6, 4]);
    });
  });

  describe('min', () => {
    test('should return the minimum value', () => {
      expect(binaryTree.min()).toEqual(1);
    });
  });

  describe('max', () => {
    test('should return the maximum value', () => {
      expect(binaryTree.max()).toEqual(7);
    });
  });

  describe('search', () => {
    test('should return false if not found', () => {
      expect(binaryTree.search(8)).toEqual(false);
    });

    test('should return true if found', () => {
      expect(binaryTree.search(1)).toEqual(true);
    });
  });

  describe('remove', () => {
    test('should remove the node', () => {
      binaryTree.remove(2);
      expect(binaryTree.search(2)).toEqual(false);
    });
  });

});