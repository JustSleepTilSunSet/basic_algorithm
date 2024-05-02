/**
 * 20240502 daily challenge
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let max = -1;
    let hashtable = {};
    for(let idx = 0;idx<nums.length;idx++){
        hashtable[nums[idx]] = true;
        if(hashtable[-1*nums[idx]]){
            let curr = Math.abs(nums[idx]);
            if(max<curr){
                max = curr;
            }
        }
    }
    return max;
};