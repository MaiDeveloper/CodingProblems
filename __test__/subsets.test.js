import subsets from '../subsets';

describe('Subsets', () => {
  test('[1, 2, 3]', () => {
    const result = subsets([1, 2, 3]);
    const expected = [
      [],
      [1],
      [1, 2],
      [1, 2, 3],
      [1, 3],
      [2],
      [2, 3],
      [3]
    ];
    expect(result).toEqual(expected);
  });
});