import Queue from '../queue-object-weakmap';

describe('Queue', () => {

  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  describe('enqueue', () => {
    test('should be a function', () => {
      expect(typeof queue.enqueue).toEqual('function');
    });
  });

  describe('dequeue', () => {
    test('should be a function', () => {
      expect(typeof queue.dequeue).toEqual('function');
    });
  });

  describe('enqueue and dequeue', () => {
    test('should add and remove an item', () => {
      queue.enqueue(1);
      queue.dequeue();
      expect(queue.size()).toEqual(0);
    });

    test('should implement First In First Out (FIFO) principle', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.dequeue()).toEqual(1);
      expect(queue.dequeue()).toEqual(2);
      expect(queue.dequeue()).toEqual(3);
    });
  });

  describe('peek', () => {
    test('should be a function', () => {
      expect(typeof queue.peek).toEqual('function');
    });

    test('should return undefined if there is no item', () => {
      expect(queue.peek()).toEqual(undefined);
    });

    test('should return the first item', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.peek()).toEqual(1);
    });

    test('should not delete the item', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.peek()).toEqual(1);
      expect(queue.peek()).toEqual(1);
    });
  });

  describe('size', () => {
    test('should be a function', () => {
      expect(typeof queue.size).toEqual('function');
    });

    test('should return 0 at the beginning', () => {
      expect(queue.size()).toEqual(0);
    });
    
    test('should return the total number of items', () => {
      queue.enqueue(1);
      expect(queue.size()).toEqual(1);
      queue.enqueue(2);
      expect(queue.size()).toEqual(2);
      queue.enqueue(3);
      queue.enqueue(4);
      queue.enqueue(5);
      expect(queue.size()).toEqual(5);
    });
  });

  describe('isEmpty', () => {
    test('should be a function', () => {
      expect(typeof queue.isEmpty).toEqual('function');
    });

    test('should return true if there is no item', () => {
      expect(queue.isEmpty()).toEqual(true);
    });

    test('should return false if there is at least one item', () => {
      queue.enqueue(1);
      expect(queue.isEmpty()).toEqual(false);
    });
  });

  describe('clear', () => {
    test('should be a function', () => {
      expect(typeof queue.clear).toEqual('function');
    });

    test('should delete all the items', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.clear();
      expect(queue.size()).toEqual(0);
    });
  });

});