# 3381. Maximum Subarray Sum With Length Divisible by K
---
- 題目大意：
  - 輸出一個被k整除的子陣列長度，且該陣列為被k整除的條件下合計最大值之子矩陣。
  - Input: nums = [1,2], k = 1
  - Output: 3

---
- 思路:
  - v1思路(dp法）
    - 核心思想： 我只討論買不買前半部分，我只分成買單前半部分與不買單前半部分這兩種處境。
  - 步驟：
    - 步驟1: dp帶值
    - 步驟2: 計算是否買單前半部分
    - 步驟3: 決定gm的更新方法
- 進一步分析：
  - 遇到連續遞減如`[-1,-2,-3,-4,-5]`就不會過，因為條件1不成立。
``` python
class Solution(object):
    def maxSubarraySum(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        dp = []; # partial max.
        gm = -1000000001; #global max
        sl = 1; # selected index
        dp.append(nums[0]);
        for i in range(1,len(nums)):
            if(dp[i-1]+nums[i] > nums[i]):
               sl = i+1; #全面全收。 
               if(sl%k == 0):
                    if(dp[i-1]+nums[i]>gm):
                        gm = dp[i-1]+nums[i];
               dp.append(dp[i-1]+nums[i]);
            else:
               sl = 1;#前面拒收。
               if(nums[i]>gm):
                   gm = nums[i];
               dp.append(nums[i]);

        return gm;
```
