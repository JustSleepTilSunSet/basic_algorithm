class Solution {
    public String[] findRelativeRanks(int[] score) {
        int[] ranked = new int[score.length];
        for(int sIdx = 0;sIdx < score.length;sIdx++){
            for(int sIdx2 = 0;sIdx2 < score.length;sIdx2++){
                if(score[sIdx]>score[sIdx2]){
                    ranked[sIdx]++;
                }
            }
        }
        String[] result = new String[score.length];
        for(int rIdx = 0;rIdx<ranked.length;rIdx++){
            if(ranked[rIdx] == score.length-1){
                result[rIdx] = "Gold Medal";
            }
           else if(ranked[rIdx] == score.length-2){
                result[rIdx] = "Silver Medal";
            }
            else if(ranked[rIdx] == score.length-3){
                result[rIdx] = "Bronze Medal";
            }else{
                result[rIdx]=(score.length - ranked[rIdx])+"";
            }
        }
        return result;
    }
}