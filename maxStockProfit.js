const maxStockProfit = prices => {
  let maxProfit = -1,
      buyPrice = 0,
      sellprice = 0,
      shouldBuy = true;
  
  for (let i = 0; i < prices.length - 1; i++) {
    if(shouldBuy) {
      buyPrice = prices[i];
    }

    sellprice = prices[i + 1];

    if (sellprice < buyPrice) {
      shouldBuy = true;
      continue;
    }

    maxProfit = Math.max(maxProfit, sellprice - buyPrice);

    shouldBuy = false;
  }

  return maxProfit;
};

// const maxStockProfit = prices => {
//   let maxProfit = -1;
//   let buyPrice = 0;
//   let sellPrice = 0;
//   let shouldBuy = true;

//   for (let i = 0; i < prices.length; i++) {
//     sellPrice = prices[i + 1];

//     if (shouldBuy) {
//       buyPrice = prices[i];
//     }

//     if (sellPrice < buyPrice) {
//       shouldBuy = true;
//     } else {
      
//       const tempProft = sellPrice - buyPrice;

//       if (tempProft > maxProfit) {
//         maxProfit = tempProft;
//       }

//       shouldBuy = false;
//     }

//   }

//   return maxProfit;
// };

export default maxStockProfit;