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