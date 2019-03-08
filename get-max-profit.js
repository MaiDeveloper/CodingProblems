/**
 *  Writing programming interview questions hasn't made me rich yet ... so I might give up and start trading Apple stocks all day instead.
 *
 *  First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.
 *
 *  So I grabbed Apple's stock prices from yesterday and put them in an array called stockPrices, where:
 *
 *  The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
 *  The values are the price (in US dollars) of one share of Apple stock at that time.
 *
 *  So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.
 *
 *  Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.
 */

function getMaxProfit(prices) {
  if (prices.length < 2) {
    throw new Error("Require at least two prices");
  }

  let minBuying = prices[0];
  let maxProfit = -Infinity;

  for (let i = 1, l = prices.length; i < l; i++) {
    minBuying = Math.min(minBuying, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minBuying);
  }

  return maxProfit;
}

const stockPrices = [10, 7, 5, 8, 11, 9];

console.log(getMaxProfit(stockPrices));
// Returns 6 (buying for $5 and selling for $11)