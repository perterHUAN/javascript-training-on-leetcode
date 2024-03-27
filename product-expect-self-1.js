function productExceptSelf(nums) {
  /*
        pre[i] product of nums[0..i)
        suffix product of nums(i, ...n - 1]
        
        res[i]  product of array expect i
        pre[i-1] * suffix[i+1]
    */
  const n = nums.length;
  if (n === 0) return [];
  const pre = Array(n).fill(1);
  const suffix = Array(n).fill(1);
  const res = Array(n).fill(1);

  for (let i = 1; i < n; ++i) pre[i] = pre[i - 1] * nums[i - 1];
  for (let i = n - 2; i >= 0; --i) suffix[i] = suffix[i + 1] * nums[i + 1];
  //      1 2 3
  // pre: 1 1 2
  // suf: 6 3 1
  // console.log(pre);
  // console.log(suffix);

  for (let i = 0; i < n; ++i) {
    res[i] = pre[i] * suffix[i];
  }
  return res;
}

module.exports = productExceptSelf;
