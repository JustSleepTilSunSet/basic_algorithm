class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        steps = [0] * n;
        steps[0] = 1;
        steps[1] = 1;
        for index in range(2,n):
            steps[index] = steps[index-1] + steps[index-2]
            print(index);
        return steps[n-1];