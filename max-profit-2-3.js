function maxProfit(prices) {
  /*
    dp[i][0],maxprofit after [0...i] transaction, finally don't have stock
    dp[i][1],maxprofit after [0...i] transaction, finally have stock
    
    dp[i][0] = max dp[i-1][0], dp[i-1][1] + prices[i]
    dp[i][1] = max dp[i-1][1], dp[i-1][0] - prices[i]
    
    dp[0][0] = 0
    dp[0][1] = -prices[i];
    
    dp[i][0] > dp[i][1]
  */
  if(prices.length === 0) return 0;
  let dp0 = 0, dp1 = -prices[0];
  for(let i = 1; i < prices.length; ++i) {
    dp0 = Math.max(dp0, dp1 + prices[i]);
    dp1 = Math.max(dp1, dp0 - prices[i]);
  }
  return dp0;
}
module.exports = maxProfit;
