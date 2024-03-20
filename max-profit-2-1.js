function maxProfit(prices) {
  /*
  
    stack [0..,,j)
    top j- 1
    stack[0] < stack[1] < stack[2] < ... < stack[top]
    
    maxP[i], if we buy and sell on [0, i] day, the max profit you can get.
    if we already calculate maxP[0..i), how to calculate maxP[i]?
    1. if we sell on day i, we must buy on j [0,i) and we can't buy or sell on day (j, i),
    because we could only have one stock at the same time.
    2. if we don't sell on day i, maxP[i] = maxP[i-1]
    
    
    notice: maxP[i] >= maxP[i-1] >= ...
  */
//   console.log("*******************************************")
  const stack = [0], maxP = Array(prices.length).fill(0);
  let res = 0;
  for(let i = 1; i < prices.length; ++i) {
    const currPrice = prices[i];
    let buyDay = -1;
    for(let j = 0; j < stack.length; ++j) {
      const cur = currPrice - prices[stack[j]] + maxP[stack[j]];
      if(cur > maxP[i]) maxP[i] = cur, buyDay = j;
    }
    // sell on day i or not
    maxP[i] = Math.max(maxP[i-1], maxP[i]);
    
//     console.log("buy: ", buyDay, " sell: ", i, " max: ", maxP[i]);
    while(stack.length > 0 && currPrice < stack[stack.length - 1]) {
      stack.pop();
    }
    stack.push(i);
    res = Math.max(res, maxP[i]);
  }
  return res;
}
