function hIndex(citations) {
  /*
        statistic 
            cnt[i]: the number of x [0,...citations.length]
            which citations[x] is larger than or equal to i.
        check
            cnt[i] >= i
        
        0 <= citations[i] <= 1000
    */
  let cnt = Array(1001).fill(0);
  for (const e of citations) {
    // how to make cnt[i] i >= e all increase 1 ? It's a hard question.
    for (let i = e; i <= 1000; ++i) {
      cnt[i]++;
    }
  }
  let i;
  for (i = 1000; i >= 0 && cnt[i] < i; --i);
  return i;
}
