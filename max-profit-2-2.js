function maxProfit(prices) {
  /* A[i,j] profit, buy on day i, and sell on day j 
   * A[i,j] = A[i+1] - A[i] + ... + A[j-1] - A[j]
   * max-profit = from(idx: 1..x) A[i_idx][j_idx], i_idx < j_idx, j_idx <= i_(idx+1)
   * 
   */
  // if current day's price > yester day's price, buy on yesterday and sell current day.
  let res = 0;
  for(let i = 1; i < prices.length; ++i) {
    if(prices[i] > prices[i-1]) res += prices[i] - prices[i-1];
  }
  return res;
}
