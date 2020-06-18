import LinkedList from '../linked-list';

describe('Linked List', () => {

  let newList;
  let wordList;

  beforeEach(() => {
    newList = new LinkedList();
    wordList = new LinkedList();
    wordList.append('one');
    wordList.append('two');
    wordList.append('three');
    wordList.append('four');
  });

  describe('append', () => {
    test('should add a node to the end', () => {
      newList.append(1);
      newList.append(2);

      expect(newList.head).not.toBeNull();
      expect(newList.head.data).toEqual(1);
      expect(newList.head.next).not.toBeNull();
      expect(newList.head.next.data).toEqual(2);

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

  describe('getNodeAt', () => {
    test('should return undefined if the given index is less than 0', () => {
      expect(wordList.getNodeAt(-1)).toEqual(undefined);
    });
    
    test('should return undefined if the given index is greater than number of nodes', () => {
      expect(wordList.getNodeAt(5)).toEqual(undefined);
    });

    test('should return a node at the specific index', () => {
      expect(wordList.getNodeAt(0).data).toEqual('one');
      expect(wordList.getNodeAt(1).data).toEqual('two');
      expect(wordList.getNodeAt(2).data).toEqual('three');
    });
  });

  describe('getHead', () => {
    test('should return null if the linked list is empty', () => {
      expect(newList.getHead()).toBeNull();
    });
    test('should return the head of the linked list', () => {
      expect(wordList.getHead()).not.toBeNull();
      expect(wordList.getHead().data).toEqual('one');
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
      expect(wordList.insert(-1, 'five')).toEqual(false);
    });

    test('should return false if the given index is greater than the total number of nodes',() => {
      expect(wordList.insert(5, 'five')).toEqual(false);
    });

    test('should insert at the beginning', () => {
      expect(wordList.insert(0, 'zero')).toEqual(true);

      expect(wordList.getNodeAt(0).data).toEqual('zero');
      expect(wordList.getNodeAt(1).data).toEqual('one');
    });

    test('should insert at the end', () => {
      expect(wordList.insert(4, 'five')).toEqual(true);

      expect(wordList.getNodeAt(0).data).toEqual('one');
      expect(wordList.getNodeAt(4).data).toEqual('five');
    });

    test('should insert a node at the specific index', () => {
      expect(wordList.insert(2, 'hello')).toEqual(true);
      expect(wordList.getNodeAt(1).data).toEqual('two');
      expect(wordList.getNodeAt(2).data).toEqual('hello');
      expect(wordList.getNodeAt(3).data).toEqual('three');
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

});