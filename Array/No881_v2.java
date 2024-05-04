class Solution {
    public int numRescueBoats(int[] people, int limit) {
        Arrays.sort(people);
        int result = 0;
        int remain = people.length;
        int leftIdx = 0;
        int rightIdx = people.length - 1;
        // ArrayList<Integer> list = new ArrayList<Integer>();
        while(rightIdx>=leftIdx){
            if(limit - people[rightIdx]- people[leftIdx]>=0){
                rightIdx--;
                result++;
                leftIdx++;
            }else{
                result++;
                rightIdx--;
            }
        }
        // for(int idx2 = 0;idx2<people.length;idx2++){
        //     System.out.print(people[idx2]);
        // }
        return result;
    }
}