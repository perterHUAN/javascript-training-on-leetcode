function productExceptSelf(nums) {
  /*
        statistic
        -30 <= nums[i] <= 30
        cnt[61]
        + - to change cnt
        how to calculate res[i]?
        res[i] = j from 0 t0 60 expect i pow(j-30, cnt[j]) * sign
    */
  if (nums.length === 0) return [];
  const cnt = Array(61).fill(0);
  const res = Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; ++i) {
    cnt[nums[i] + 30]++;
  }
  for (let i = 0; i < nums.length; ++i) {
    cnt[nums[i] + 30]--;
    let tmp = 1;
    for (let j = 0; j < cnt.length; ++j) {
      tmp *= Math.pow(j - 30, cnt[j]);
    }
    res[i] = tmp;
    cnt[nums[i] + 30]++;
  }
  return res;
}

module.exports = productExceptSelf;
