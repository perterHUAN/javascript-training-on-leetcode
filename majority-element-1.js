function majorityElement(nums) {
  nums.sort((a, b) => a - b);
  return nums[(nums.length / 2)>>0];
}
