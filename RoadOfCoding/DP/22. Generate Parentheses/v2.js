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