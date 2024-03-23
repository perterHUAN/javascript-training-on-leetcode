function canJump(nums) {
  /*
   * [0...i) the farthest reachable position is k
   * how to calculate [0..,i+1) the farthest reachable position?
   * if k < i , k
   * if k >= i , max(k, i + nums[i])
   *
   * Can we reach the last position?
   * Do the farthest reachable position of [0..n) is larger than or equal to n - 1?
   */

  let farthestPosition = 0;
  for (let i = 0; i < nums.length; ++i) {
    const p = nums[i] + i;
    if (farthestPosition >= i && p > farthestPosition) {
      farthestPosition = p;
      if (farthestPosition >= nums.length - 1) return true;
    } else if (farthestPosition < i) {
      return false;
    }
  }
  return false;
}
module.exports = canJump;
