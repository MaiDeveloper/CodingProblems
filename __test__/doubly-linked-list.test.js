import DoublyLinkedList from '../doubly-linked-list';

describe('Doubly Linked List', () => {

  let newList;
  let wordList;

  beforeEach(() => {
    newList = new DoublyLinkedList();
    wordList = new DoublyLinkedList();
    wordList.push('one');
    wordList.push('two');
    wordList.push('three');
    wordList.push('four');
  });

  describe('push', () => {
    test('should add a node to the end', () => {
      newList.push(1);
      newList.push(2);

      expect(newList.head).not.toBeNull();
      expect(newList.head.value).toEqual(1);
      expect(newList.head.next).not.toBeNull();
      expect(newList.head.next.value).toEqual(2);

    });
  });

  describe('size', () => {
    test('should return the number of nodes', () => {
      expect(newList.size()).toEqual(0);
      expect(wordList.size()).toEqual(4);
    });
  });

  describe('isEmpty', () => {
    test('should return true if there is no node', () => {
      expect(newList.isEmpty()).toEqual(true);
    });

    test('should return false if there is at least one node', () => {
      expect(wordList.isEmpty()).toEqual(false);
    });
  });

  describe('getElementAt', () => {
    test('should return undefined if the given index is less than 0', () => {
      expect(wordList.getElementAt(-1)).toEqual(undefined);
    });
    
    test('should return undefined if the given index is greater than number of nodes', () => {
      expect(wordList.getElementAt(5)).toEqual(undefined);
    });

    test('should return a node at the specific index', () => {
      expect(wordList.getElementAt(0).value).toEqual('one');
      expect(wordList.getElementAt(1).value).toEqual('two');
      expect(wordList.getElementAt(2).value).toEqual('three');
    });
  });

  describe('getHead', () => {
    test('should return null if the linked list is empty', () => {
      expect(newList.getHead()).toBeNull();
    });
    test('should return the head of the linked list', () => {
      expect(wordList.getHead()).not.toBeNull();
      expect(wordList.getHead().value).toEqual('one');
    });
  });

  describe('removeAt', () => {

    test('should return undefined if the given index is less than 0', () => {
      expect(wordList.removeAt(-1)).toEqual(undefined);
    });

    test('should return undefined if the given index is greater than the total number of nodes', () => {
      expect(wordList.removeAt(4)).toEqual(undefined);
    });

    test('should remove a node at a specific index', () => {
      expect(wordList.removeAt(0)).toEqual('one');
      expect(wordList.removeAt(1)).toEqual('three');
      expect(wordList.removeAt(1)).toEqual('four');
    });
  });

  describe('insert', () => {

    test('should return false if the given index is less than 0', () => {
      expect(wordList.insert('five', -1)).toEqual(false);
    });

    test('should return false if the given index is greater than the total number of nodes',() => {
      expect(wordList.insert('five', 5)).toEqual(false);
    });

    test('should insert at the beinning when there is no item', () => {
      expect(newList.insert('zero', 0)).toEqual(true);
    });

    test('should insert at the beginning', () => {
      expect(wordList.insert('zero', 0)).toEqual(true);

      expect(wordList.getElementAt(0).value).toEqual('zero');
      expect(wordList.getElementAt(1).value).toEqual('one');
    });

    test('should insert at the end', () => {
      expect(wordList.insert('five', 4)).toEqual(true);

      expect(wordList.getElementAt(0).value).toEqual('one');
      expect(wordList.getElementAt(4).value).toEqual('five');
    });

    test('should insert a node at the specific index', () => {
      expect(wordList.insert('hello', 2)).toEqual(true);
      expect(wordList.getElementAt(1).value).toEqual('two');
      expect(wordList.getElementAt(2).value).toEqual('hello');
      expect(wordList.getElementAt(3).value).toEqual('three');
    });
  });

  describe('indexOf', () => {

    test('should return -1 if not found', () => {
      expect(wordList.indexOf('One')).toEqual(-1);
      expect(wordList.indexOf('five')).toEqual(-1);
    });

    test('should return the start index', () => {
      expect(wordList.indexOf('one')).toEqual(0);
    });

    test('should return the last index', () => {
      expect(wordList.indexOf('four')).toEqual(3);
    });

    test('should return the index', () => {
      expect(wordList.indexOf('three')).toEqual(2);
    });
  });

  describe('remove', () => {

    test('should return undefined if not found', () => {
      expect(wordList.remove('five')).toEqual(undefined);
    });

    test('should delete the node', () => {
      expect(wordList.remove('two')).toEqual('two');
      expect(wordList.size()).toEqual(3);
      expect(wordList.remove('two')).toEqual(undefined);
    });
  });

  describe('clear', () => {
    test('should remove all nodes', () => {
      wordList.clear();
      expect(wordList.head).toBeNull();
      expect(wordList.size()).toEqual(0);
    });
  });

});