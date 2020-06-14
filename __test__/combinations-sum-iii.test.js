import combinationSum3 from '../combinations-sum-iii';

describe('Combinations Sum 3', () => {

  test('count = 3, sum = 7', () => {
    const result = combinationSum3(3, 7);
    const expected = [
      [1, 2, 4]
    ];

    expect(result).toEqual(expected);
  });

  test('count = 3, sum = 9', () => {
    const result = combinationSum3(3, 9);
    const expected = [
      [1, 2, 6],
      [1, 3, 5],
      [2, 3, 4]
    ];

    expect(result).toEqual(expected);
  });

});