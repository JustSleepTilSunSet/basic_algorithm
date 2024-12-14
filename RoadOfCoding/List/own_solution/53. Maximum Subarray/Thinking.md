# 53. Maximum Subarray
---
#### 題意：假設陣列是[-2,1,-3,4,-1,2,1,-5,4]則要抓出合計最大值的子陣列。
* Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
* Output: 6
---
#### 思路:
##### v1思路：
   - 核心思想：利用類似於連續函數的概念，我們先計算後決定是否捨棄這次的計算。此時會遇到三種情境：
     - 1. 計算後大於max，此時total覆蓋最大值。
       2. 現在這個值成為新的連續函數的原點，也就是捨棄，所以是新的原點那麼total要重算，此時發生也必定是最大值，故最大值替換。
   - 解題步驟
     - 步驟1. 無論如何都把這個點給選進來
     - 步驟2. 確認這個節點是否一值可以作為一個新的計算基準，若是則將此變成新的基底(替換最大值);並更新total。
``` javascript
   /**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let total = nums[0];
    let max = nums[0];
   for(let index = 1;index<nums.length;index++){
       total +=nums[index];
        // console.log(total);
        // console.log(max);
       
        if(nums[index]>total){
            total = nums[index];
        }
        
        // 重算。
        if(total > max){
            max = total;
        }
   } 
   return max;
};
```
##### v2思路：
  - 核心思想：v2思路與v1大致相同，這是一個dp的解決方案(相關的技術關鍵字有:Kadane’s Algorithm)。實際上v1的邏輯還能再縮減，問題的本質是詢問`此區段的區域最大值是否是全域最大的值`。
    故於v1的版本中為了延續連續函數的特性，total選擇無論如何都先算，而這其實是不必要的。進一步思索一個子問題，對於區域最大值而言，僅思考
`此節點的選擇是否為區域最大值？`即可。
  - 解題步驟：
    - 步驟1.: 比對這個點是否加入？
    - 步驟2.: 確認加入與不加入是否是區域最大值是否大於全域最大值。  
``` python
class Solution(object):
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        maximum = nums[0];
        globalMax = nums[0];
        for i in range(1,len(nums)):
            maximum = max(nums[i],maximum + nums[i])
            if(maximum > globalMax):
                globalMax = maximum;
        return globalMax;
```
