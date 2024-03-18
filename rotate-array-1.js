function rotate(nums, k) {
  /*
    O(1) space
    O(n) time
    
    a[0, n-k)  a[n-k, n)
    => 
    a[n-k, n)  a[0, n-k)
    
    A: a[0.. n-k)
    B: a[n-k, n)
    
    A B
    =>
    B A
    
    A' = reverse A
    B' = reverse B
    
    (A' B')' = B A
  */
  const n = nums.length;
  if(n === 0 || (k = k % n) === 0) return;
  
  reverse(nums, 0, n - k);
  reverse(nums, n-k, n);
  reverse(nums, 0, n);
}
/*
  reverse nums[start, end)
*/
function reverse(nums, start, end) {
  let left = start, right = end - 1;
  while(left < right) {
    let t = nums[left];
    nums[left] = nums[right];
    nums[right] = t;
    ++left;
    --right;
  }
}
