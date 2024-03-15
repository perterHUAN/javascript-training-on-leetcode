const { describe, it } = require("node:test");
const assert = require("node:assert")
const removeDuplicates = require('./remove-duplicates-1');

describe("remove duplicates from sorted Array", function () {
  it("Consecutive duplicate numbers appear at the middle of the array", function () {
    const nums = [1, 2, 3, 4, 4, 4, 5];
    const expectNums = [1, 2, 3, 4, 5, 0, 0];

    const k = removeDuplicates(nums);
    assert.deepEqual(nums.slice(0, k), expectNums.slice(0, k));
  });
  it("Consecutive duplicate numbers appear at the start of the array", function () {
    const nums = [1, 1, 2, 3, 4, 5];
    const expectNums = [1, 2, 3, 4, 5, 0, 0];

    const k = removeDuplicates(nums);
    assert.deepEqual(nums.slice(0, k), expectNums.slice(0, k));
  });
  it("Consecutive duplicate numbers appear at the end of the array", function () {
    const nums = [1, 2, 3, 4, 5, 5, 5];
    const expectNums = [1, 2, 3, 4, 5, 0, 0];

    const k = removeDuplicates(nums);
    assert.deepEqual(nums.slice(0, k), expectNums.slice(0, k));
  });
  it("no consecutive duplicate numbers", function () {
    const nums = [1, 2, 3, 4, 5];
    const expectNums = [1, 2, 3, 4, 5, 0, 0];
    const k = removeDuplicates(nums);
    assert.deepEqual(nums.slice(0, k), expectNums.slice(0, k));
  });

  it("array is empty", function () {
    const nums = [];
    const expectNums = [];

    const k = removeDuplicates(nums);
    assert.deepEqual(nums.slice(0, k), expectNums.slice(0, k));
  });
});
