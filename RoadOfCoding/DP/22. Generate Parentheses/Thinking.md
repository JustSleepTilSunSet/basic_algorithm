# 22. Generate Parentheses
---
## 題目大綱
  
  - 給予一個n盡可能的組成()，要全部列出來
  - `Input: n = 3`
  - `Output: ["((()))","(()())","(())()","()(())","()()()"]`
  
## 解題時間
  

| 解法版本  | 解題時間 | 是否通過 | 是否查看提示 |
| ------------- |:-------------:|:-------------:|:-------------:|
| v1      | [ Time taken: 46 m 41 s ]     | N | N |
| v2      | [ Time taken: 41 m 50 s ]     | Y | Y |

## 解題思路：
##### 核心思路：
> 利用dp解決問題
#### v1思路：
  
  -  v1的考慮單純只考慮()的配置，包含左右與夾擠的配置。
  1. 定義為[0],[1],[2]都是一樣的定版
  2. 處理掉部分特例(n=4適用這些規則)
``` javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let dp = [];
    dp.push([""]);
    dp.push(["()"]);
    dp.push(["()()", "(())"]);
    for (let idx = 3; idx <= n; idx++) {
        let solution = [];
        let map = {};
        let tpn = idx;
        for (let solutionIdx = 0; solutionIdx < dp[idx - 1].length; solutionIdx++) {
            if (!map["(" + dp[idx - 1][solutionIdx] + ")"]) {
                solution.push("(" + dp[idx - 1][solutionIdx] + ")");
                map["(" + dp[idx - 1][solutionIdx] + ")"] = true;
            }
            if (!map[dp[idx - 1][solutionIdx] + "()"]) {
                solution.push(dp[idx - 1][solutionIdx] + "()");
                map[dp[idx - 1][solutionIdx] + "()"] = true;
            }
            if (!map["()" + dp[idx - 1][solutionIdx]]) {
                solution.push("()" + dp[idx - 1][solutionIdx]);
                map["()" + dp[idx - 1][solutionIdx]] = true;
            }
        }
        // console.log(tpn%2);
        if (tpn % 2 == 0) {
            tpn = Math.floor(tpn / 2);
            for (let solutionIdx = 0; solutionIdx < dp[tpn].length; solutionIdx++) {
                let sub = dp[tpn][solutionIdx] + dp[tpn][solutionIdx];
                console.log(sub);
                if (!map[sub]) {
                    solution.push(sub);
                    map[sub] = true;
                }
            }

        }
        dp.push(solution);
    }
    return dp[n];
};
```

---

#### v2思路：
##### 核心思路：
> 利用dp解決問題
  
  -  v1的考慮單純只考慮()的配置，包含左右與夾擠的配置。
  1. 我們推演一個問題，最小子問題。
    - f(0) = "",
    - f(1) = "("+f(0)+")" + f(0), 這代表什麼？最小的子問題是左括號與右括號形成的字串。
    - 故推測f(2) = "("+f(1)+")" + f(0), 又f(0) = ""，故解為：
        - f(2) = ["(())","()()"]; <= 成立。
    - 故推測f(3) = "("+f(2)+")" + f(1),
    - 若通式:f(n) = f(p) + f(n-p-1)。
    - 又f定義為dp之解空間。

``` javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let dp = [];
    dp.push([""]);
    dp.push(["()"]);
    // f(2) = f(1)+f(1);
    //f(1) = "("+f(0)+")"
    // f(2) = "("+f(1)+")";
    // f(3) = "("+f(2)+")" + f(1);
    // f(3) = f(2);
    // f(n) = f(p) + f(q);
    // f(n) = "("+f(p)+")"+f(q);
    for (let nCount = 2; nCount <= n; nCount++) {
        let solution = [];
        for (let p = 0; p < nCount; p++) {
            let q = nCount - p -1;// 4 - 2
            for(let pSol of dp[p]){
                // console.log(q);
                for(let qSol of dp[q]){
                    solution.push("("+pSol+")"+qSol);
                }
            }
        }
        dp.push(solution);
    }
    return dp[n];
};
```
