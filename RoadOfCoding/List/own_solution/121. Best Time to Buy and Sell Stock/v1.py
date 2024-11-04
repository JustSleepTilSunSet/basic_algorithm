class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buyPoint = prices[0];
        bestProfit = 0;
        for idx in range(1,len(prices)):
            if buyPoint > prices[idx]:
                buyPoint = prices[idx];
            else:
                currentProfit = prices[idx] - buyPoint;
                if(currentProfit > bestProfit):
                    bestProfit = currentProfit; 
        return bestProfit;