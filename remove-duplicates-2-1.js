function removeDuplicates(nums) {
  /*
    [0, notSameIdx) 
    [notSameIdx, nextToCheckIdx) empty
    [nextToCheckIdx, n)
    
    current idx = nextToCheckIdx
    pre
    cnt
  */
  
  let pre = null, cnt = 0;
  let notSameIdx = 0, nextToCheckIdx = 0;
  
  while(nextToCheckIdx < nums.length) {
    const val = nums[nextToCheckIdx++];
    if(val !== pre) {
      nums[notSameIdx++] = val;
      pre = val;
      cnt = 1;
    }else {
      if(cnt >= 2) {
        ++cnt;
      }else {
        nums[notSameIdx++] = val;
        ++cnt;
      }
    }
  }
  return notSameIdx;
}

module.exports = removeDuplicates;
