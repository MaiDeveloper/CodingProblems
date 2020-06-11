import letterCasePermutation from '../letter-case-permutation';

describe('Letter Case Permutation', () => {

  test('a1b2', () => {
    const result = letterCasePermutation('a1b2');
    const expected = ['a1b2', 'a1B2', 'A1b2', 'A1B2'];
    expect(result).toEqual(expected);
  });

  test('3z4', () => {
    const result = letterCasePermutation('3z4');
    const expected = ['3z4', '3Z4'];
    expect(result).toEqual(expected);
  });

  test('12345', () => {
    const result = letterCasePermutation('12345');
    const expected = ['12345'];
    expect(result).toEqual(expected);
  });

});