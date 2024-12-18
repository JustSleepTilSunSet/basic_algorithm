/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // dp定義為:最小該幣的可交換種類數
    // coins = [1,2,5] 
    // dp[1] = 1 <-1種
    // dp[2] = 2 <-2種
    // 因為 dp[2] = dp[1]+coins[foundOutIndx](=>0) <-2種
    // dp[3] = dp[2] + coins[foundOutIdx](=0) <-2種
    // let foundOutIdx = coins.findIndex((kind) => kind == 1);
    if(amount == 0 )
        return 0;
    let dp = new Array(amount + 1).fill(Infinity);
    // dp[0] = -1;
    for (let coin of coins) {
        dp[coin] = 1;
    }
    // console.log(dp);
    for (let exchange = 2; exchange <= amount; exchange++) {
        // 最小交換數的第一個要件是？可以被換。
        // let minEx = Infinity;
        // console.log("exchange: ",exchange);
        for (let p = 1; p <= Math.ceil(exchange/2); p++) {
            let q = exchange - p;
            dp[exchange] = Math.min(dp[exchange], dp[p] + dp[q]);
        }
        // dp[exchange] = minEx;
    }
    return dp[amount] == Infinity ? -1 : dp[amount];
};