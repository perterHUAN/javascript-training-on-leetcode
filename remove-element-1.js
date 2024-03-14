function removeElement(nums, val) {
  // notice: change in place, don't allow to create a new array to store result.
  /*
    [0, notSameIdx) already check, not same as val
    (sameIdx, n -1] already check, same as val
    [notSameIdex, sameIdx] next to check
    
    when notSameIdx > sameIdex , the set which includes elements that next to check
    is empty, the algorithm end.
    
  */
  let notSameIdx = 0, sameIdx = nums.length - 1; 
  while(notSameIdx <= sameIdx) {
    if(nums[notSameIdx] !== val) {
      ++notSameIdx;
    }else {
      let t = nums[sameIdx];
      nums[sameIdx] = nums[notSameIdx];
      nums[notSameIdx] = t;
      
      --sameIdx;
    }
  }
  return notSameIdx;
}

module.exports = removeElement;