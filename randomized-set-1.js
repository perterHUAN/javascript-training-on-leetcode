function RandomizedSet() {
  // val -> array index
  this.elementToIndex = new Map();
  // store vals
  this.elements = new Array();
}

RandomizedSet.prototype.insert = function (val) {
  // check whether the val that is about to be insert to map is existing.
  // push new val to elements array
  // record val -> index in elementToIndex map
  if (this.elementToIndex.has(val)) return false;
  this.elements.push(val);
  this.elementToIndex.set(val, this.elements.length - 1);
  return true;
};

RandomizedSet.prototype.remove = function (val) {
  if (!this.elementToIndex.has(val)) return false;
  // swap last one and one that is going to be deleted.
  const idx = this.elementToIndex.get(val);
  const valOfEnd = this.elements[this.elements.length - 1];
  this.elements[idx] = valOfEnd;
  this.elementToIndex.set(valOfEnd, idx);
  // delete
  this.elementToIndex.delete(val);
  this.elements.pop();
  return true;
};

RandomizedSet.prototype.getRandom = function () {
  return this.elements[Math.floor(this.elements.length * Math.random())];
};

module.exports = RandomizedSet;
