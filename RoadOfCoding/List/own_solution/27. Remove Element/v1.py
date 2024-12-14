class Solution(object):
    def removeElement(self, nums, val):
        """
        :type nums: List[int]
        :type val: int
        :rtype: int
        """
        # 2n 法
        result = [];
        for i in (range(0, len(nums))):
            if(nums[i]!=val):
                result.append(nums[i]);
        for i in (range(0, len(result))):
            nums[i] = result[i]
        return len(result)