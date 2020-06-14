import palindromePartitioning from '../palindrome-partitioning';

describe('Palindrome Partitioning', () => {
  test('aab', () => {
    const restult = palindromePartitioning('aab');
    const expected = [
      ["a","a","b"],
      ["aa","b"],
    ];
    expect(restult).toEqual(expected);
  });
});