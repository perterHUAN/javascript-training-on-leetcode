const { describe, it } = require("node:test");
const assert = require("node:assert");
const canJump = require("./can-jump-2");
describe("canJump", function () {
  it("can reach to last location", function () {
    // 3 1
    // 2 1 1
    // 1 2 1
    const nums1 = [3, 2, 1, 1, 1];
    assert.equal(canJump(nums1), true);

    const nums2 = [3, 2, 3, 0, 1];
    assert.equal(canJump(nums2), true);

    const nums3 = [3, 2, 1, 1, 1];
    assert.equal(canJump(nums3), true);

    const nums4 = [3, 2, 1, 1, 0];
    assert.equal(canJump(nums4), true);

    const nums5 = [3, 2, 1];
    assert.equal(canJump(nums5), true);

    const nums6 = [5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0];
    assert.equal(canJump(nums6), true);
  });

  it("can't reach to last location", function () {
    const nums1 = [3, 0, 1, 0, 1, 2];
    assert.equal(canJump(nums1), false);

    const nums2 = [3, 0, 1, 1, 0, 2];
    assert.equal(canJump(nums2), false);

    const nums3 = [3, 0, 1, 1, 1, 1, 2, 0, 0, 0, 1];
    assert.equal(canJump(nums3), false);
  });
});
