class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        popCount = 0;
        si = 1;
        tp = 1;
        for i in range(1,len(nums)):
            if nums[i-1]!=nums[i]:
                while(si<i):
                    nums[si] = nums[i];
                    si = si +1;
                tp = tp +1;
                si = tp;
                popCount = i - si  + 1;
                # print("next round:",nums,si,i);
        while(popCount != 0):
            nums.pop();
            popCount = popCount - 1;