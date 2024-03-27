const { describe, test } = require("node:test");
const assert = require("node:assert");
describe("productExceptSelf", () => {
  test("not empty ", () => {
    const nums = [1, 2, 3];
    const expect = [6, 3, 2];
    assert.deepEqual(productExceptSelf(nums), expect);
  });
  test("empty", () => {
    const nums = [];
    const expect = [];
    assert.deepEqual(productExceptSelf(nums), expect);
  });
});
