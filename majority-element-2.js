function majorityElement(nums) {
  // bit
  let res = 0;
  for(let i = 0; i < 32; ++i) {
    let OneCnt = 0, ZeroCnt = 0;
    for(const e of nums) {
      if(e & (1<<i)) {
        OneCnt++;
      }else {
        ZeroCnt++;
      }
    }
    if(OneCnt > ZeroCnt) {
      res = res | (1<<i);
    }
  }
  return res;
}
module.exports = majorityElement;
