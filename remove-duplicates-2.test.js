const { describe, it } = require("node:test");
const assert = require("node:assert");

describe("removeDuplicates", function() {
  it("at start", function() {
    const nums = [1, 1, 1, 2, 3, 4, 5];
    const expect = [1, 1, 2, 3, 4, 5, 0];
    
    const k = removeDuplicates(nums);
    assert.deepEqual(nums.slice(0, k), expect.slice(0, k));
  });
  
  it("at middle", function(){
    const nums = [1, 1,  2, 2, 2, 3, 4, 5];
    const expect = [1, 1, 2, 2, 3, 4, 5, 0, 0];
    
    const k = removeDuplicates(nums);
    assert.deepEqual(nums.slice(0, k), expect.slice(0, k));
  })
   it("at end", function(){
    const nums = [1, 1,  2, 2, 3, 4, 5, 5, 5];
    const expect = [1, 1, 2, 2, 3, 4, 5, 5, 5];
    
    const k = removeDuplicates(nums);
    assert.deepEqual(nums.slice(0, k), expect.slice(0, k));
  })   
  
  it("no more than 2 consecutive equal numbers", function () {
    const nums = [1, 1,  2, 2, 3, 4, 5, 5];
    const expect = [1, 1, 2, 2, 3, 4, 5, 5];
    
    const k = removeDuplicates(nums);
    assert.deepEqual(nums.slice(0, k), expect.slice(0, k));
  })
   it("empty", function () {
    const nums = [];
    const expect = [];
    
    const k = removeDuplicates(nums);
    assert.deepEqual(nums.slice(0, k), expect.slice(0, k));
  })
});

