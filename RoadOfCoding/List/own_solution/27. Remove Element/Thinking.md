# 27.Remove Element
---
- 題目大意：
  - Input: 給予一個無序的List<int>
  - Output:給予set的有效範圍，並以int的方式return。此外，審答案時僅會搜尋0到有效範圍的區間(即為0~有效範圍的閉區間）確認是否與答案相同。

---
- 思路:
  - v1思路(2n法）
    - 步驟1: 鎖定不重複的內容。
    - 步驟2: 由於鎖定起來不重複的內容即為正解，所以其他內容是什麼都不重要，直接覆蓋過去即可。
    - 步驟3: 鎖定起來的內容長度必定是有效區間的最大範圍，故將其返還。
- 進一步分析：
  - 由於是利用兩個迴圈組以來的，所以時間複雜度是O(2n)。
``` python
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
            if(nums[i]!=val): #鎖定入set的內容。
                result.append(nums[i]);
        for i in (range(0, len(result))):# 覆蓋不重要的元素。
            nums[i] = result[i]
        return len(result)
```
