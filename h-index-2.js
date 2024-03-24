function hIndex(citations) {
  /*
        statistic 
            cnt[i]: the number of x [0,...citations.length]
            which citations[x] is larger than or equal to i.
        check
            cnt[i] >= i
        
        0 <= citations[i] <= 1000
    */
  let maxCitationCount =
    citations.reduce((pre, cur) => (pre > cur ? pre : cur)) + 1;
  let diff = Array(maxCitationCount + 1).fill(0);
  let cnt = Array(maxCitationCount).fill(0);
  for (const e of citations) {
    /* how to make cnt[i] i <= e all increase 1 ? It's a hard question.
       difference equal
       cnt[0] cnt[1] ... cnt[k] ... cnt[n]
       cnt[0]+1 cnt[1]+1 ... cnt[k]+1 cnt[k] ... cnt[n]
       diff[0] = cnt[0]
       diff[1] = cnt[1] - cnt[0]
       diff[2] = cnt[2] - cnt[1]
       ...
       diff[k] = cnt[k+1] - cnt[k]
       ...

       only diff[k] is changed after increasing.
       diff[k]--;

       how to calculate from diff arrayto cnt arary ?
       cnt[0] = diff[0]
       cnt[1] = cnt[0] + diff[1]
       cnt[2] = cnt[1] + diff[2]
       
    */
    diff[e + 1]--;
    diff[0]++;
  }
  // revert to cnt
  cnt[0] = diff[0];
  for (let i = 1; i < maxCitationCount; ++i) {
    cnt[i] = cnt[i - 1] + diff[i];
  }
  console.log("cnt: ", cnt);
  let h;
  for (h = maxCitationCount - 1; h >= 0 && cnt[h] < h; --h);
  return h;
}

module.exports = hIndex;
