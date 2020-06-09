import maxStockProfit from '../maxStockProfit';

describe('maxStockProfit', () => {

  it('should return 22 for input [32, 46, 26, 38, 40, 48, 42]', () => {
    const result = maxStockProfit([32, 46, 26, 38, 40, 48, 42]);
    const expected = 22;

    expect(result).toStrictEqual(22);
  });

});