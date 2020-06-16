import Stack from '../stack';

describe('Stack', () => {

  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  describe('push', () => {
    test('should be a function', () => {
      expect(typeof stack.push).toEqual('function');
    });
  });

  describe('pop', () => {
    test('should be a function', () => {
      expect(typeof stack.pop).toEqual('function');
    });
  });

  describe('push and pop', () => {
    test('should add an item and remove an item', () => {
      stack.push(1);
      stack.pop();
      expect(stack.size()).toEqual(0);
    });

    test('should implement FILO (First In Last Out) principle', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop()).toEqual(3);
      expect(stack.pop()).toEqual(2);
      expect(stack.pop()).toEqual(1);
    });

  });

  describe('size', () => {
    test('should be a function', () => {
      expect(typeof stack.size).toEqual('function');
    });

    test('should return 0 at the beginning', () => {
      expect(stack.size()).toEqual(0);
    });
    
    test('should return the total number of items', () => {
      stack.push(1);
      expect(stack.size()).toEqual(1);
      stack.push(2);
      expect(stack.size()).toEqual(2);
      stack.push(3);
      stack.push(4);
      stack.push(5);
      expect(stack.size()).toEqual(5);
    });
  });

  describe('isEmpty', () => {
    test('should be a function', () => {
      expect(typeof stack.isEmpty).toEqual('function');
    });

    test('should return true if there is no item', () => {
      expect(stack.isEmpty()).toEqual(true);
    });

    test('should return false if there is at least one item', () => {
      stack.push(1);
      expect(stack.isEmpty()).toEqual(false);
    });
  });

  describe('peek', () => {
    test('should be a function', () => {
      expect(typeof stack.peek).toEqual('function');
    });

    test('should return undefined if there is no item', () => {
      expect(stack.peek()).toEqual(undefined);
    });

    test('should return the last item', () => {
      stack.push(1);
      stack.push(2);
      expect(stack.peek()).toEqual(2);
    });

    test('should not delete the item', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.peek()).toEqual(3);
      expect(stack.peek()).toEqual(3);
    });

  });

  describe('clear', () => {
    test('should be a function', () => {
      expect(typeof stack.clear).toEqual('function');
    });

    test('should delete all the items', () => {
      stack.push(1);
      stack.push(2);
      stack.clear();
      expect(stack.size()).toEqual(0);
    });
  });

  describe('toString', () => {
    test('should be a function', () => {
      expect(typeof stack.toString).toEqual('function');
    });

    test('should return a string contains all the items with comma as a separator', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      const result = stack.toString();
      const expected = '1,2,3';
      expect(result).toEqual(expected);
    });
  });

});