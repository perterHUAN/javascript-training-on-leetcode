const { describe, it } = require("node:test");
const assert = require("node:assert");

describe("merge", function () {
  it("merge two sorted array to one sorted array, which stores in the first sorted array", function () {
    const nums1 = [1, 2, 3, 0, 0],
      n = 3;
    const nums2 = [1, 2],
      m = 2;

    merge(nums1, n, nums2, m);
    assert.deepEqual(nums1, [1, 1, 2, 2, 3]);
  });

  it("nums2 is empty", function () {
    const nums1 = [1, 2, 3],
      n = 3;
    const nums2 = [],
      m = 0;

    merge(nums1, n, nums2, m);
    assert.deepEqual(nums1, [1, 2, 3]);
  });
  it("nums1 is empty", function () {
    const nums1 = [0, 0, 0, 0],
      n = 0;
    const nums2 = [1, 2, 3, 4],
      m = 4;

    merge(nums1, n, nums2, m);
    assert.deepEqual(nums1, [1, 2, 3, 4]);
  });
});
