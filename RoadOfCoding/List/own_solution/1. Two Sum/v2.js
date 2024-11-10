/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    for(let index = 0;index<nums.length;index++){
        let matchNum = target - nums[index];
        if(map[matchNum]!=undefined){
            return [index,map[matchNum]];
        }
        else if(map[nums[index]] == undefined){
           map[nums[index]] = index;
        }
    }
    return [];
};