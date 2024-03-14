const assert = require("node:assert");
const { describe, it } = require("node:test");

describe("removeElement", function () {
  it("remove all elements in place which value is equal to second parameter val, return k representing the number of remain elements and first k elements are not equal to val. ", function () {
    const nums = [0, 1, 2, 2, 3];
    const val = 2;
    const expectNums = [0, 1, 3];
    const k = removeElement(nums, val);
    assert.equal(k, 3);
    assert.deepEqual(
      nums.slice(0, k).sort((a, b) => a - b),
      expectNums
    );
  });
  it("not exist a number same as val", function () {
    const nums = [0, 1, 2, 2, 3];
    const val = 10;
    const expectNums = [0, 1, 2, 2, 3];
    const k = removeElement(nums, val);
    assert.equal(k, 5);
    assert.deepEqual(
      nums.slice(0, k).sort((a, b) => a - b),
      expectNums
    );
  });

  it("only one number same as val", function () {
    const nums = [0, 1, 2, 2, 3];
    const val = 3;
    const expectNums = [0, 1, 2, 2];
    const k = removeElement(nums, val);
    assert.equal(k, 4);
    assert.deepEqual(
      nums.slice(0, k).sort((a, b) => a - b),
      expectNums
    );
  });

  it("nums is empty", function () {
    const nums = [];
    const val = 3;
    const expectNums = [];
    const k = removeElement(nums, val);
    assert.equal(k, 0);
    assert.deepEqual(
      nums.slice(0, k).sort((a, b) => a - b),
      expectNums
    );
  });
});
