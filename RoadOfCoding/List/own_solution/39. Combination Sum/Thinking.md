# 39. Combination Sum
---
- 題目大意： Input,Output 很明顯吧！就Input,Output的意思，盡可能的去組解，但是不要重複的。
    - Input: candidates = [2,3,6,7], target = 7
    - Output: [[2,2,3],[7]]
  
## 解題時間
  

| 解法版本  | 解題時間 | 是否通過 | 是否查看提示 | 備註  |
| ------------- |:-------------:|:-------------:|:-------------:|:-------------:|
| v1      | [ Time taken: 52 m 53 s ]  | Y | Y | 我只有參考避免掉重複解的最優解法，不然我原本想要用map |
---
- 思路:
  - dfs展開
    - 步驟1: dfs展開
    - 步驟2: 解只有三種狀態，total > target, total == target, total < target，針對這三種設定流程。

``` javascript
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
```
