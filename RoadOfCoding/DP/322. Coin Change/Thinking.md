# 322. Coin Change
---
## 題目大綱
  
  - 最小換硬幣問題，這是一題經典的動態規劃。題目大意是如果給你11元，且有1,2,5元的硬幣可以找錢，問最小找錢數。
  - Input: coins = [1,2,5], amount = 11
  - Output: 3
  - Explanation: 11 = 5 + 5 + 1
  
## 解題時間
  

| 解法版本  | 解題時間 | 是否通過 | 是否查看提示 |
| ------------- |:-------------:|:-------------:|:-------------:|
| v1      | [ Time taken: 1 hr 38 m 58 s ]     | N | N |
| v2      | [ Time taken: 4 m 34 s ]     | Y | Y |
  


## 解題思路：
##### 核心思路：
> 利用dp解決問題
  
#### v1思路：
  
  -  v1的概念上就是探討有限空間的最小換硬幣數。
  1. 已存有的硬幣最小兌換成本一定是`1`，僅需要1枚硬幣就可以兌換。
  2. 那麼定義一函數f為最小的可交換硬幣數:
    - 前提是必定可換，所以只要不是有限方法都是不能換。
    - 故假設已有的硬幣都是最佳換法`1`為前提。
    - 那麼，以f(4)為例子，f(4)的最佳換法就是Min(f(2)+f(2),f(1)+f(3),...)
        - f(1)+f(3) 與 f(3) + f(1)重複，故僅搜尋一半
  - 方法上沒有問題，但`超時`，顯然這不是一個最優的辦法。
``` javascript
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
```
  
#### v2思路：
  
-  v2的概念上就是與v1類似，但是，這方法指出無論要換的面額多麽的大，那麼都必定是餘數的面額+1次。
- 我們縮減問題，考慮這個例子固定面額為[1,4,5],f(3) = Min(f(2) + 1,f(-1)+1,f(-2)+1)，又因為f的定義為能交換硬幣的最小次數，基於此定義必須要是`必定可換的面額`，故`負值`必定不存在，所以依舊是保持在無限大的交換成本。
  
``` javascript
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
    dp[0] = 0;
    // for (let coin of coins) {
    //     dp[coin] = 1;
    // }
    // console.log(dp);
    for (let exchange = 1; exchange <= amount; exchange++) {
        // 最小交換數的第一個要件是？可以被換。
        // let minEx = Infinity;
        // console.log("exchange: ",exchange);
        for(let p of coins){
            if(exchange - p >=0){
                dp[exchange] = Math.min(dp[exchange], dp[exchange - p] +1);
            }
        }
        // for (let p = 1; p <= Math.ceil(exchange/2); p++) {
        //     let q = exchange - p;
        //     dp[exchange] = Math.min(dp[exchange], dp[p] + dp[q]);
        // }
        // dp[exchange] = minEx;
    }
    // console.log(dp);
    return dp[amount] == Infinity ? -1 : dp[amount];
};
```