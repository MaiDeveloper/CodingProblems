import numberToBinary from '../number-to-binary-with-stack';

describe('Number to Binary', () => {
  test('10', () => {
    const result = numberToBinary(10);
    const expected = '1010';
    expect(result).toEqual(expected);
  });

  test('150', () => {
    const result = numberToBinary(150);
    const expected = '10010110';
    expect(result).toEqual(expected);
  });
});