function merge(nums1, n, nums2, m) {
  // from last to start, no ascending order
  let idx1 = n - 1, idx2 = m - 1, idx3 = nums1.length - 1;
  
  /*
    nums1[0..idx1] none descending, not merge
    nums2[0...idx2] none descending, not merge
    
    nums1[idx3+1,...] merge nums1[idx1+1, n-1] and nums2[idx2+1, m-1]
    
    how to determine the next value nums1[idx3] ?
    
    max(nums1[idx1], nums2[idx2]) if idx1 >= 0 and idx2
    nums1[idx1] if idx2 = 0
    nums1[idx2] if idx1 = 0
    
    
    what's the realtionship between idx1,idx2 and idx3?
    
    n - (idx1 + 1) + m - (idx2 + 1) = n + m - (idx3 + 1)
    (idx1 + 1) + (idx2 + 1) = (idx3 + 1)
  
  */
  while(idx1 >= 0 || idx2 >= 0) {
    if(idx2 < 0) {
      nums1[idx3--] = nums1[idx1--];
    }else if(idx1 < 0) {
      nums1[idx3--] = nums2[idx2--];
    }else {
      if(nums1[idx1] > nums2[idx2]) {
        nums1[idx3--] = nums1[idx1--];
      }else {
        nums1[idx3--] = nums2[idx2--];
      }
    }
  }
}

module.exports = {
	merge	
}
