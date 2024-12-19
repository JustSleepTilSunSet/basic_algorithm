/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = [];
    let tp = [];
    // candidates.sort();
    function dfs(total, sIdx) {
        for (let idx = sIdx; idx < candidates.length; idx++) {
            total += candidates[idx];
            // console.log(tp);
            // console.log(total);
            if (total > target) {
                // 此代回溯
                total -= candidates[idx];
                // return 0;
            }
            else if (total < target) {
                tp.push(candidates[idx]);
                dfs(total, idx);
                let tmp = tp.pop();
                total = total - tmp;
            }
            else if (total == target) {
                // console.log("candidates[idx]: "+candidates[idx]);
                tp.push(candidates[idx]);
                result.push([...tp]);
                let tmp = tp.pop();
                total -= tmp;
            }
        }
    }
    dfs(0, 0);
    // console.log(result);
    return result;
};