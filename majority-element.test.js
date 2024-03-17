const { describe, it } = require("node:test");
const assert = require("node:assert");
const majorityElement = require("./majority-element-1");

describe("majorityElement", function () {
  it("middle", function () {
    const nums = [1, 2, 2, 3, 3, 3, 3, 3, 4];
    assert.equal(majorityElement(nums), 3);
  });

  it("start", function () {
    const nums = [1, 1, 1, 1, 1, 2, 2, 3, 4];
    assert.equal(majorityElement(nums), 1);
  });

  it("end", function () {
    const nums = [1, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4];
    assert.equal(majorityElement(nums), 4);
  });
});
