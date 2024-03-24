function hIndex(citations) {
  /*
		test whether a given x is a valid h
		if yes, may exist a larger h,
		if no, the h-index must not be one of [x, ..]

		citations.length <= 5000
	*/
  let left = 0,
    right = 5000;
  /*
		h-index
		to check:
			[left, right]
		already check: 
			[0,...left) valid h
			(right, ...] not valid h
	*/
  function isValidH(t) {
    return citations.reduce((pre, c) => (c >= t ? pre + 1 : pre), 0) >= t;
  }
  while (left <= right) {
    const middle = (left + right) >> 1;
    if (isValidH(middle)) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return right;
}
module.exports = hIndex;
