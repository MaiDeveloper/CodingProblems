import {
  knapsackMaximumItems,
  knapsackMaximumValue
} from '../knapsack';


describe('Knapsack Maximum Items', () => {

  let items;

  beforeAll(() => {
    items = [
      { weight: 2, value: 3 },
      { weight: 3, value: 4 },
      { weight: 4, value: 5 },
    ];
  });

  test('should return an array', () => {
    const result = knapsackMaximumItems();
    expect(result).toBeInstanceOf(Array);
  });

  test('should return an array containing one item index', () => {
    const result = knapsackMaximumItems(items, 3);

    expect(result).toEqual([1]);
  });

  test('should return an array containing multiple item indexes that match the exact capacity', () => {
    const result = knapsackMaximumItems(items, 5);

    expect(result).toEqual([1, 0]);
  });

  test('should return an array containing multiple item indexes that does not match exact capacity', () => {
    const result = knapsackMaximumItems(items, 8);

    expect(result).toEqual([2, 1]);
  });

});

describe('Knapsack Maximum Value', () => {

  let items;

  beforeAll(() => {
    items = [
      { weight: 2, value: 3 },
      { weight: 3, value: 4 },
      { weight: 4, value: 5 },
    ];
  });

  test('should return an array', () => {
    const result = knapsackMaximumValue();
    expect(result).toBeInstanceOf(Array);
  });

  test('should return an array containing one item index', () => {
    const result = knapsackMaximumValue(items, 3);

    expect(result).toEqual(4);
  });

  test('should return an array containing multiple item indexes that match the exact capacity', () => {
    const result = knapsackMaximumValue(items, 5);

    expect(result).toEqual(7);
  });

  test('should return an array containing multiple item indexes that does not match exact capacity', () => {
    const result = knapsackMaximumValue(items, 8);

    expect(result).toEqual(9);
  });

});