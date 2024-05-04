class Solution {
    public int numRescueBoats(int[] people, int limit) {
        Arrays.sort(people);
        int result = 0;
        int remain = people.length;
        // ArrayList<Integer> list = new ArrayList<Integer>();
        while(remain>0){
            int tpLimit = limit;
            int confirmCount = 0 ;
            for(int idx = people.length - 1;idx>=0;idx--){
                if(confirmCount==2){
                    break;
                }
                if(tpLimit - people[idx]>=0){
                    tpLimit = tpLimit - people[idx]; //commit the operation.
                    remain--;
                    people[idx] = limit+1; // mark on picked weight.
                    confirmCount++;
                }
            }
            result++;
        }
        // for(int idx2 = 0;idx2<people.length;idx2++){
        //     System.out.print(people[idx2]);
        // }
        return result;
    }
}