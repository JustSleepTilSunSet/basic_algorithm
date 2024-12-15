/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let result = [[]];
    let tp = [];
    let map = {};
    nums.sort();
    let dfs = function(currIdx,tp){
        for(let idx = currIdx;idx<nums.length;idx++){
            tp.push(nums[idx]);
            if(!map[tp.join()]){
                result.push([].concat(tp));
                map[tp.join()] = true;
            }
            dfs(idx+1,tp);
            tp.pop();
        }
    }
    dfs(0,tp);
    return result;
};