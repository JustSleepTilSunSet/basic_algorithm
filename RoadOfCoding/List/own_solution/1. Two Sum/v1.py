class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        map = {};
        result = [];
        for index in range(0,len(nums)):
            diff = target - nums[index];
            if(map.get(diff, None) != None):
                result.append(index);
                result.append(map[diff]);
                return result;
            elif(map.get(nums[index],None) == None):
                 map[nums[index]] = index;
