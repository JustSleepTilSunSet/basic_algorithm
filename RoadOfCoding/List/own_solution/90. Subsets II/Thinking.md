# 90. Subsets II
---
- 題目大意：這看Input/Output就看得懂了，不過值得注意這句話：
`The solution set must not contain duplicate subsets. Return the solution in any order.`這個是有順序的。
    - Input: nums = [1,2,2]
    - Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
---
#### 思路
    - v1思路(dfs展開):
        - 這是相當經典的back trace，也就是dfs的問題：
            - 步驟1:排序（因為題目需要有一個任意順序）
            - 步驟2: dfs展開
``` javascript
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
```