import SortedLinkedList from '../sorted-linked-list';

describe('Sorted Linked List', () => {

  let newList;
  let wordList;

  beforeEach(() => {
    newList = new SortedLinkedList();
    wordList = new SortedLinkedList();
    wordList.push('aaa');
    wordList.push('bbb');
    wordList.push('ccc');
    wordList.push('ddd');
  });

  describe('push', () => {
    test('should add a node to the end', () => {
      newList.push(1);

      expect(newList.head).not.toBeNull();
      expect(newList.head.value).toEqual(1);
    });

    test('should maintain the sorted order', () => {
      newList.push(2);
      newList.push(3);
      newList.push(1);

      expect(newList.head.value).toEqual(1);
      expect(newList.head.next.value).toEqual(2);
      expect(newList.head.next.next.value).toEqual(3);
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

    test('should return false if there is at least aaa node', () => {
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
      expect(wordList.getElementAt(0).value).toEqual('aaa');
      expect(wordList.getElementAt(1).value).toEqual('bbb');
      expect(wordList.getElementAt(2).value).toEqual('ccc');
    });
  });
  
  describe('getHead', () => {
    test('should return null if the linked list is empty', () => {
      expect(newList.getHead()).toBeNull();
    });
    test('should return the head of the linked list', () => {
      expect(wordList.getHead()).not.toBeNull();
      expect(wordList.getHead().value).toEqual('aaa');
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
      expect(wordList.removeAt(0)).toEqual('aaa');
      expect(wordList.removeAt(1)).toEqual('ccc');
      expect(wordList.removeAt(1)).toEqual('ddd');
    });
  });

  describe('insert', () => {

    test('should maintain the sorted order', () => {
      newList.insert(2);
      newList.insert(3);
      newList.insert(1);

      expect(newList.head.value).toEqual(1);
      expect(newList.head.next.value).toEqual(2);
      expect(newList.head.next.next.value).toEqual(3);
    });

  });

  describe('indexOf', () => {

    test('should return -1 if not found', () => {
      expect(wordList.indexOf('AAA')).toEqual(-1);
      expect(wordList.indexOf('eee')).toEqual(-1);
    });

    test('should return the start index', () => {
      expect(wordList.indexOf('aaa')).toEqual(0);
    });

    test('should return the last index', () => {
      expect(wordList.indexOf('ddd')).toEqual(3);
    });

    test('should return the index', () => {
      expect(wordList.indexOf('ccc')).toEqual(2);
    });
  });

  describe('remove', () => {

    test('should return undefined if not found', () => {
      expect(wordList.remove('five')).toEqual(undefined);
    });

    test('should delete the node', () => {
      expect(wordList.remove('bbb')).toEqual('bbb');
      expect(wordList.size()).toEqual(3);
      expect(wordList.remove('bbb')).toEqual(undefined);
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