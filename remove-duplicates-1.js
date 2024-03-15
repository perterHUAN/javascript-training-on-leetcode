function removeDuplicates(nums) {
  /*
    notSameIdx, nextToCheckIdx
    [0, notSameIdx) not same
    
    [notSameIdx, nextToCheckIdx) can occuply
   
    [nextToCheckIdx, nums.length) next to check
    
    preNumber
  */
  
  let notSameIdx = 0, nextToCheckIdx = 0, pre = null;
  while(nextToCheckIdx < nums.length){
    if(nums[nextToCheckIdx] !== pre) {
      pre = nums[nextToCheckIdx];
      nums[notSameIdx] = pre;
      ++notSameIdx;
    }
    ++nextToCheckIdx;
  }
  return notSameIdx;
}
