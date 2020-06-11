import wordSearch from '../word-search';

describe('Word Search', () => {

  let board;

  beforeEach(() => {
    board = [
      ['A','B','C','E'],
      ['S','F','C','S'],
      ['A','D','E','E']
    ];
  });

  test('ABCCED', () => {
    const result = wordSearch(board, 'ABCCED');
    const expected = true;
    expect(result).toEqual(expected);
  });

  test('SEE', () => {
    const result = wordSearch(board, 'SEE');
    const expected = true;
    expect(result).toEqual(expected);
  });

  test('ABCB', () => {
    const result = wordSearch(board, 'ABCB');
    const expected = false;
    expect(result).toEqual(expected);
  });

});