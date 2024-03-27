/*
    RandomizedSet
    RandomizedSet.prototype.insert 
    RandomizedSet.prototype.delete 
    RandomizedSet.prototype.remove 
*/

const { describe, test } = require("node:test");
const assert = require("node:assert");
const RandomizedSet = require("./randomized-set-1");

describe("RandomizedSet", () => {
  test("insert method, return true if the item was not present, false otherwise", () => {
    const s = new RandomizedSet();
    let res;

    res = s.insert(1);
    assert.equal(res, true);

    res = s.insert(2);
    assert.equal(res, true);

    res = s.insert(1);
    assert.equal(res, false);
  });

  test("getRandom method, return an random element from the current set of elements", () => {
    const s = new RandomizedSet();
    let res;

    s.insert(1);
    s.insert(2);
    s.insert(3);
    s.insert(4);

    res = s.getRandom();
    assert.ok([1, 2, 3, 4].includes(res));

    s.remove(1);

    res = s.getRandom();
    assert.ok([2, 3, 4].includes(res));

    s.remove(2);

    res = s.getRandom();
    assert.ok([3, 4].includes(res));
  });

  test("getRandom method, each element must have the same probability of being return", () => {
    const s = new RandomizedSet();

    function randomNumber() {
      return Math.floor(Math.random() * 10000);
    }
    const failTimesThreshold = 10;
    const difference = 50;
    let failTimes = 0;
    // do 100 times lab
    for (let i = 0; i < 100; ++i) {
      const n1 = randomNumber(),
        n2 = randomNumber();
      let cnt1 = 0;
      let cnt2 = 0;
      s.insert(n1);
      s.insert(n2);
      for (let j = 0; j < 1000; ++j) {
        const res = s.getRandom();
        res === n1 ? ++cnt1 : ++cnt2;
      }
      if (Math.abs(cnt1 - cnt2) > difference) ++failTimes;
      assert.ok(failTimes < failTimesThreshold);
    }
  });

  test("remove method, return true if the item was present, false otherwise", () => {
    const s = new RandomizedSet();
    let res;

    s.insert(1);
    s.insert(2);
    s.insert(3);
    s.insert(4);

    res = s.remove(1);
    assert.equal(res, true);

    res = s.remove(1);
    assert.equal(res, false);

    res = s.remove(2);
    assert.equal(res, true);
  });
});
