import StackLinkedList from '../stack-linked-list';

describe('Stack Linked List', () => {

  let newStack;
  let numberStack;

  beforeEach(() => {
    newStack = new StackLinkedList();
    numberStack = new StackLinkedList();
    numberStack.push(1);
    numberStack.push(2);
    numberStack.push(3);
  });

  describe('push', () => {
    test('should add an item', () => {
      newStack.push(1);
      expect(newStack.size()).toEqual(1);
    });
  });

  describe('pop', () => {
    test('should return undefined if there is no item', () => {
      expect(newStack.pop()).toEqual(undefined);
    });
    test('should remove and return an item', () => {
      numberStack.pop();
      expect(numberStack.size()).toEqual(2);
    });
  });

  describe('push and pop', () => {

    test('should implement FILO (First In Last Out) principle', () => {
      newStack.push(1);
      newStack.push(3);
      newStack.push(2);
      expect(newStack.pop()).toEqual(2);
      expect(newStack.pop()).toEqual(3);
      expect(newStack.pop()).toEqual(1);
    });

  });

  describe('size', () => {

    test('should return 0 at the beginning', () => {
      expect(newStack.size()).toEqual(0);
    });
    
    test('should return the total number of items', () => {
      expect(numberStack.size()).toEqual(3);
    });
  });

  describe('isEmpty', () => {
    test('should return true if there is no item', () => {
      expect(newStack.isEmpty()).toEqual(true);
    });

    test('should return false if there is at least one item', () => {
      expect(numberStack.isEmpty()).toEqual(false);
    });
  });

  describe('peek', () => {

    test('should return undefined if there is no item', () => {
      expect(newStack.peek()).toEqual(undefined);
    });

    test('should return the last item', () => {
      expect(numberStack.peek()).toEqual(3);
    });

    test('should not delete the item', () => {
      expect(numberStack.peek()).toEqual(3);
      expect(numberStack.peek()).toEqual(3);
    });

  });

  describe('clear', () => {
    test('should delete all the items', () => {
      numberStack.clear();
      expect(numberStack.size()).toEqual(0);
    });
  });

});