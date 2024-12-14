/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let total = nums[0];
    let max = nums[0];
   for(let index = 1;index<nums.length;index++){
        total +=nums[index];
        // console.log(total);
        // console.log(max);
       
        if(nums[index]>total){
            total = nums[index];
        }
        
        // 重算。
        if(total > max){
            max = total;
        }
   } 
   return max;
};
