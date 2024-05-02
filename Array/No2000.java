/**
 * 20240501 Daily challenge
 */
class Solution {
    public String reversePrefix(String word, char ch) {
        String sub = "";
        StringBuilder wordBD = new StringBuilder(word);
        // boolean isFirst = true;
        for(int idx = 0;idx<word.length();idx++){
            char curr = word.charAt(idx);
            if(curr == ch){
                int rIdx = idx;
                int sIdx = 0;
                while(rIdx>=0){
                    wordBD.setCharAt(sIdx, word.charAt(rIdx));
                    rIdx--;
                    sIdx++;
                }
                word = wordBD.toString();
                // isFirst = false;
                return word;
            }
        }
        return word;
    }
}