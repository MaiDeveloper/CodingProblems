import generateParentheses from '../generate-parentheses';

describe('Generate Parentheses', () => {

  test('n = 3', () => {
    const result = generateParentheses(3);
    const expected = [
      "((()))",
      "(()())",
      "(())()",
      "()(())",
      "()()()"
    ];
console.log(result);
    expect(result).toEqual(expected);
  });

});