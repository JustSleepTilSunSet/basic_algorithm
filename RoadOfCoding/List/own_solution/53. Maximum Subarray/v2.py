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