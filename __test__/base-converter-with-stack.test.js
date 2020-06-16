import baseConverter from '../base-converter-with-stack';

describe('Base Converter', () => {
  test('Convert 10 to base 16', () => {
    const result = baseConverter(10, 16);
    const expected = 'A';
    expect(result).toEqual(expected);
  });

  test('Convert 15 to base 16', () => {
    const result = baseConverter(15, 16);
    const expected = 'F';
    expect(result).toEqual(expected);
  });

  test('Convert 10 to base 16', () => {
    const result = baseConverter(16, 16);
    const expected = '10';
    expect(result).toEqual(expected);
  });

  test('Convert 100345 to base 2', () => {
    const result = baseConverter(100345, 2);
    const expected = '11000011111111001';
    expect(result).toEqual(expected);
  });

  test('Convert 100345 to base 8', () => {
    const result = baseConverter(100345, 8);
    const expected = '303771';
    expect(result).toEqual(expected);
  });

  test('Convert 100345 to base 16', () => {
    const result = baseConverter(100345, 16);
    const expected = '187F9';
    expect(result).toEqual(expected);
  });

  test('Convert 100345 to base 35', () => {
    const result = baseConverter(100345, 35);
    const expected = '2BW0';
    expect(result).toEqual(expected);
  });
});