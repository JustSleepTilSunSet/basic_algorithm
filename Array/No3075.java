class Solution {
    public long maximumHappinessSum(int[] happiness, int k) {
        Arrays.sort(happiness);
        int dwindles = 0;
        long max = 0;
        int hIdx = happiness.length - 1;
        for (int idx = 0; idx < k; idx++) {
            int tend = happiness[hIdx] - dwindles;
            if(tend <0){
                // tend = 0;
                break;
            }
            max+= tend;   
            dwindles++;
            hIdx--;
        }
        return max;
    }
}