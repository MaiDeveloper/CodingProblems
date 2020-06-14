import permutationsII from '../permutations-ii';

describe('Permutations II', () => {
  test('[1, 1, 2]', () => {
    const result = permutationsII([1, 1, 2]);
    const expected = [
      [1, 1, 2],
      [1, 2, 1],
      [2, 1, 1],
    ];
    expect(result).toEqual(expected);
  });

  test('[1]', () => {
    const result = permutationsII([1]);
    const expected = [
      [1],
    ];
    expect(result).toEqual(expected);
  });

  test('[1, 2]', () => {
    const result = permutationsII([1, 2]);
    const expected = [
      [1, 2],
      [2, 1],
    ];
    expect(result).toEqual(expected);
  });

});