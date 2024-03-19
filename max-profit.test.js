const { describe, it } = require("node:test");
const assert = require("node:assert");

describe("maxProfit", function() {
  it("prices array is empty", function() {
    const prices = [];
    assert.equal(maxProfit(prices), 0);
  })
  it("ascending, existing profit when we buy first day and sell last day", function() {
    const prices = [1, 2, 3, 4, 5, 6, 6, 7];
    assert.equal(maxProfit(prices), 6);
  });
  it("descending, no profit", function() {
    const prices = [7, 6, 5, 4, 3, 2, 1];
    assert.equal(maxProfit(prices), 0);
  })
  it("other, existing profict", function(){
    const prices = [1, 2, 6, 7, 2, 3, 4, 9, 2];
    assert.equal(maxProfit(prices), 8);
  })
  
});

