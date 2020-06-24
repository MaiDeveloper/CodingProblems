import Set from '../set';

describe('Set', () => {

  let newSet,
      colorSet,
      favSet;

  beforeEach(() => {
    newSet = new Set();
    
    colorSet = new Set();
    colorSet.add('red');
    colorSet.add('green');
    colorSet.add('blue');

    favSet = new Set();
    favSet.add('blue');
    favSet.add('purple');
    favSet.add('orange');

  });

  describe('add', () => {
    test('should return true if success', () => {
      const result = newSet.add('one');
      expect(result).toEqual(true);
    });

    test('should return false if the item already in the set', () => {
      expect(colorSet.add('red')).toEqual(false);
    });

    test('should not add duplicate item', () => {
      colorSet.add('red');
      expect(Object.keys(colorSet.items).length).toEqual(3);
    });
  });

  describe('has', () => {
    test('should return false if it does not contain the item', () => {
      expect(colorSet.has('pink')).toEqual(false);
    });

    test('should return true if it contains the item', () => {
      expect(colorSet.has('red')).toEqual(true);
    });
  });

  describe('remove', () => {
    test('should return false if the item does not exist', () => {
      expect(colorSet.remove('pink')).toEqual(false);
    });

    test('should return true if the item already exist', () => {
      expect(colorSet.remove('red')).toEqual(true);
    });

    test('should remove the item', () => {
      colorSet.remove('red');
      expect(colorSet.has('red')).toEqual(false);
    });
  });

  describe('clear', () => {
    test('should remove all items', () => {
      colorSet.clear();
      expect(colorSet.size()).toEqual(0);
    });
  });

  describe('size', () => {
    test('should return 0 if there is no item', () => {
      expect(newSet.size()).toEqual(0);
    })

    test('should return the size', () => {
      expect(colorSet.size()).toEqual(3);
    });
  });

  describe('values', () => {
    test('should return an array', () => {
      expect(Array.isArray(colorSet.values())).toEqual(true);
    });

    test('should return all the items', () => {
      const result = colorSet.values();
      const expected = ['red', 'green', 'blue'];
      expect(result).toEqual(expected);
    });
  });

  describe('union', () => {
    
    test('should return an new set contains values from either set', () => {
      const mySet = colorSet.union(favSet);
      const values = mySet.values();
      const expected = ['red', 'green', 'blue', 'purple', 'orange'];

      expect(mySet).toBeInstanceOf(Set);
      expect(values).toEqual(expected);
    });
  });

  describe('intersection', () => {
    test('should return an new set only contains values exists in both sets', () => {
      const mySet = colorSet.intersection(favSet);
      const values = mySet.values();
      const expected = ['blue'];
      expect(mySet).toBeInstanceOf(Set);
      expect(values).toEqual(expected);
    });
  });

  describe('difference', () => {
    test('should return an new set contains values that does not exist in the other set', () => {
      const mySet = colorSet.difference(favSet);
      const values = mySet.values();
      const expected = ['red', 'green'];
      expect(mySet).toBeInstanceOf(Set);
      expect(values).toEqual(expected);
    });
  });

  describe('subset', () => {

    test('should turn false if it is not a subset', () => {
      const isSubset = colorSet.subset(favSet);
      expect(isSubset).toEqual(false);

      const mySet = new Set();
      mySet.add('red');
      expect(colorSet.subset(mySet)).toEqual(false);
    });

    test('should return true if it is a subset', () => {
      const mySet = new Set();
      mySet.add('green');
      mySet.add('red');
      const isSubset = mySet.subset(colorSet);
      expect(isSubset).toEqual(true);
    });
  });

});