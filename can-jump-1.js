function canJump(nums) {
  /*
    current idx i
    [i..n)  next to jump ?
    current range = nums[i] 
    j in (i..i+range] and can jump farthest distance. 
    
    next to calculate?
    [j..n)
  */
  let currIdx = 0;
  while (currIdx < nums.length - 1) {
    let r = nums[currIdx] + currIdx;
    let nextIdx = -1,
      maxDistance = -1;
    for (let i = currIdx + 1; i < nums.length && i <= r; ++i) {
      const distance = nums[i] + i;
      if (distance > maxDistance) {
        maxDistance = distance;
        nextIdx = i;
      }
    }
    if (nextIdx === -1) return false;
    currIdx = nextIdx;
  }
  return true;
}
