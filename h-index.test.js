const { describe, it } = require("node:test");
const assert = require("node:assert");

describe("H-Index", () => {
	it("should be 3", () => {
		const citations = [3, 4, 3, 2, 1];
		assert.equal(hIndex(citations), 3);
	})
	it("should be 1", () => {
		const citations = [0, 0, 0, 1, 1];
		assert.equal(hIndex(citations), 1);

	})
	it("should be 0", () => {
		const citations = [0, 0, 0, 0, 0];
		assert.equal(hIndex(citations), 0);
	})
})
