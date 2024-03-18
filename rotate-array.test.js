const { describe, it } = require("node:test");
const assert = require("node:assert");
const rotate = require("./rotate-array-1");

function nativeRotateSolution(nums, k) {
  const n = nums.length;
  k = k % n;
  const res  = [];
  // k
  for(let i = n - k; i < n; ++i) {
    res.push(nums[i]);
  }
  // n - k
  for(let i = 0; i < n - k; ++i) {
    res.push(nums[i]);
  }
  return res;
}

describe("rotate", function() {
  it("0 or n step, n is the length of nums", function() {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    const expect = nums.slice();
    rotate(nums, 0);
    assert.deepEqual(nums, expect);
    
    const nums2 = [1, 2, 3, 4, 5, 6, 7];
    const expect2 = nums2.slice();
    rotate(nums2, nums2.length);
    assert.deepEqual(nums2, expect2);
    
  });
  
  it("(0, n) step", function() {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    const expect = nativeRotateSolution(nums, 3);
    rotate(nums, 3);
    assert.deepEqual(nums, expect);
  })
  
  it(">n step", function() {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    const expect = nativeRotateSolution(nums, 100);
    rotate(nums, 100);
    assert.deepEqual(nums, expect);
  })
  
  it("nums is empty", function() {
    const nums = [];
    const expect = [];
    rotate(nums, 100);
    assert.deepEqual(nums, expect);
  })
});
