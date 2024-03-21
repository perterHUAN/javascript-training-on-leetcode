const assert = require("node:assert");
const { describe, it } = require("node:test");
const maxProfit = require("./max-profit-2-2");
describe("maxProfit", function() {
  it("array is empty", function() {
    const nums = [];
    assert.equal(maxProfit(nums), 0);
  })
  it("ascending, get max profit when buy on first day and sell on last day", function() {
    const nums = [1, 2, 3, 4, 5, 6];
    assert.equal(maxProfit(nums), 5);
  });
  it("descending, no profit", function() {
    const nums = [6, 5, 4, 3, 2, 1];
    assert.equal(maxProfit(nums), 0);
  })
  it("other", function() {
    const nums = [1, 2, 3, 4, 7, 6, 5, 3];
    assert.equal(maxProfit(nums), 6);
    
    const nums2 = [7, 6, 5, 4, 3, 2, 4, 5, 6,  7];
    assert.equal(maxProfit(nums2), 5);
    
    const nums3 = [7, 1, 5, 3, 6, 4];
    assert.equal(maxProfit(nums3), 7);
  })
  
});

