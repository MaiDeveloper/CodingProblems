import minCoinChange from '../min-coin-change';

describe('Min Coin Change', () => {

  let coins;

  beforeAll(() => {
    coins = [ 1, 5, 10, 25 ];
  });

  test('should return an empty array', () => {
    const result = minCoinChange(coins, 0);
    expect(result).toEqual([]);
  });

  test('should return minimum coin change', () => {
    let result = minCoinChange(coins, 36);
    expect(result).toEqual([1, 10, 25]);

    result = minCoinChange(coins, 12);
    expect(result).toEqual([1, 1, 10]);
  });

  test('should return minimum coin change', () => {

  });

});