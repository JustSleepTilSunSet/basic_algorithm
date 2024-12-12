class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        si = 1;
        validIndex = 1;
        for i in range(1,len(nums)):
            if nums[i-1]!=nums[i]:
                while(si<i):
                    nums[si] = nums[i];
                    si = si +1;
                validIndex = validIndex + 1;
                si = validIndex;
        return validIndex