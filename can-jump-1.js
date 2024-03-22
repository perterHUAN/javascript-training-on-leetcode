function canJump(nums) {
  /*
    current idx i
    [i..n)  next to jump ?
    current range = nums[i] 
    j in (i..i+range] and can jump farthest distance. 
    
    next to calculate?
    [j..n)
  */
  /*
    optimize:
      1. Preprocessing to calculate the maximum reachable distance for each position
      2. Using the state from the end of the previous cycle
  */
  const maxDistanceArray = nums.map((e,idx) => e + idx);
  let currIdx = 0, nextToCheckIdx = currIdx + 1;
  while(currIdx < nums.length - 1 && nextToCheckIdx < nums.length) {
    let r = nums[currIdx] + currIdx;
    let nextIdx = -1, maxDistance = -1;
    while(nextToCheckIdx < nums.length && nextToCheckIdx <= r) {
      const distance = maxDistanceArray[nextToCheckIdx];
      if(distance > maxDistance) {
        maxDistance = distance;
        nextIdx = nextToCheckIdx;
      }
      ++nextToCheckIdx;
    }
    if(nextIdx === -1) return false;
    currIdx = nextIdx;
    nextToCheckIdx = Math.max(nextToCheckIdx, currIdx + 1);
  }
  return true;
}
module.exports = canJump;