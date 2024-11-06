/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let total = nums[0];
    let max = nums[0];
   for(let index = 1;index<nums.length;index++){
        total +=nums[index];
        if(total > max){
            max = total;
        }
        
        // 重算。
        if(nums[index]>max){
            total = nums[index];
            max = nums[index];
        }

        // total替換
        if(nums[index]>total){
            total = nums[index];
        }
   } 
   return max;
};