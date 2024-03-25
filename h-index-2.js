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
  let cnt = Array(maxCitationCount).fill(0);
  for (const e of citations) {
    // how to make cnt[i] i >= e all increase 1 ? It's a hard question.
    cnt[e]++;
  }
  for (let j = maxCitationCount - 2; j >= 0; --j) {
    cnt[j] += cnt[j + 1];
  }
  let i;
  for (i = maxCitationCount - 1; i >= 0 && cnt[i] < i; --i);
  return i;
}

module.exports = hIndex;
