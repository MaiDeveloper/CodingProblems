/**
 * You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
 * 
 * Example 1:
 * 
 * Input: coins = [1, 2, 5], amount = 11
 * Output: 3 
 * Explanation: 11 = 5 + 5 + 1
 * Example 2:
 * 
 * Input: coins = [2], amount = 3
 * Output: -1
 * Note:
 * You may assume that you have an infinite number of each kind of coin.
 */

/**
 * 
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
  if (amount === 0) {
    return 0;
  }

  let res = Infinity;

  for (let i = 0; i < coins.length; i++) {
    if (coins[i] <= amount) {
      let count = coinChange(coins, amount - coins[i]);

      if (count !== Infinity && count + 1 < res) {
        res = count + 1;
      }
    }
  }

  return res;
};

console.log(coinChange([1,2,5], 8));