import letterCombinationsOfAPhoneNumber from '../letter-combinations-of-a-phone-number';

describe('Letter Combinations of a Phone Number', () => {

  test('23', () => {
    const result = letterCombinationsOfAPhoneNumber('23');
    const expected = [
      'ad',
      'ae',
      'af',
      'bd',
      'be',
      'bf',
      'cd',
      'ce',
      'cf',
    ];
    expect(result).toEqual(expected);
  });

});