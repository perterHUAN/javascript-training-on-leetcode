function maxProfit(prices) {
  /*
    preMin [0, i) min prices
    maxProfit [0, i) buy first and then sell
    
    if sell on day i, when buy to get max profix?
    buy on day j which price is min [0, i).
  */
  if(prices.length === 0) return 0;
  let preMin = prices[0], maxP = 0;
  for(let i = 1; i < prices.length; ++i) {
    const cur = prices[i] - preMin;
    if(cur > maxP) {
      maxP = cur;
    }
    preMin = Math.min(preMin, prices[i]);
  }
  return maxP;
}
module.exports = maxProfit;
