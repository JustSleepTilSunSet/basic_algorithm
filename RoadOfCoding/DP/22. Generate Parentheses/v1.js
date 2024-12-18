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