# 26. Remove Duplicates from Sorted Array
### 題目大意：
- 把重複元素的list做成一個set;但不可以額外創建array，必須原地修改nums的值;並且return set的長度。
- 這裡有個細節，題目在機制上，不需要真的去修剪成一個set！只要給return 有效的長度，答案就只會搜尋到有效的長度處。
  
### symbol def. :
- x: don't care.
- start index(si) : 部分array要設定成不同的元素
- tp(transport index) : 下一個可以設定的位置

### 思路
- v1思路(這方法在剔除重複元素的時候有問題，講究真的去將nums修剪成一個set），無法處理[1,1,1,1,1]< 因為沒有參照目標。
- n^2法
  
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 
--- | --- | --- | --- | --- | --- | --- | --- | --- | ---
| 0 | 0 | 1 | 1 | 1 | 2 | 2 | 3 | 3 | 4  
x | si |  |  |  |  |  |  |  |  
x | tp |  |  |  |  |  |  |  | 
i - 1 | i |  |  |  |  |  |  |  | 
- 核心思路: 既然已經是排列過的矩陣，那麼只要比對當前的值與前一個值是否相等，就能確定是不是已經到了要選擇入set的元素。
- 步驟
  - 檢查 i-1 與 i是否相同，若發現不同則觸發將元素往前推的機制
  - 若 i-1 與 i 相同，將i之前的元素全部都設定成唯一一次不同的元素:
  
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 
--- | --- | --- | --- | --- | --- | --- | --- | --- | ---
| 0 | **1** | 1 | 1 | 1 | 2 | 2 | 3 | 3 | 4  
x |  | si(可以接受被設定的index) |  |  |  |  |  |  |  
x |  | tp(1設定完畢，推到2) |  |  |  |  |  |  | 
checked | i | i+1 |  |  |  |  |  |  | 
    
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 
--- | --- | --- | --- | --- | --- | --- | --- | --- | ---
| 0 | **1** | **2** | **2** | **2** | 2(發現要取代的位置） | 2 | 3 | 3 | 4  
x |  |  |  |  | si  |  |  |  |  
x |  | tp |  |  |  |  |  |  |  
checked |  |  |  | i | i+1 |  |  |  | 
  
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 
--- | --- | --- | --- | --- | --- | --- | --- | --- | ---
| 0 | **1** | **2** | **2** | **2** | 2(發現要取代的位置） | 2 | 3 | 3 | 4  
x |  |  |  |  | si  |  |  |  |  
x |  | | tp |  |  |  |  |  |  
checked |  |  |  | i | i+1 |  |  |  | 


| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 
--- | --- | --- | --- | --- | --- | --- | --- | --- | ---
| 0 | **1** | **2** | **2** | **2** | 2 | 2 | 3 | 3 | 4  
x |  |  | si |  |   |  |  |  |  
x |  | | tp |  |  |  |  |  |  
checked | checked | checked |  | i | i+1 |  |  |  | 
  
  - 以此類推後，我們可以發現一個規律，前面無論替換幾次或覆蓋掉幾個元素都不重要，最後要pop的次數恰好等於，
   **最後一個元素去覆蓋掉前一個元素的個數** 也就是 `i - si  + 1`
    - 這個寫法的困境是無法處理無參照物的困境，參照物的意思是[1,1,1,2]此時2就是參照物;[1,1,1,1]無參照物。
``` python
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
```
----
- v2思路：
- v2在思路上完美地避免了，無參照的問題，因為有效範圍至少必選一個
- n^2法
  
```python
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
```
---
- 其他思路:
  - 或許，我們還能更高效，既然我們已經有前面的邏輯了，這是不是代表，其實不用去操作"覆蓋元素"的動作呢？
  - 實際上只要找到一個不同就可以直接覆蓋過去，而後騰出可以覆蓋的位置(即為si＋１)
  - n法
    
``` python
class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        si = 1;
        for i in range(1,len(nums)):
            if nums[i-1]!=nums[i]:
                nums[si] = nums[i];
                si = si + 1;
        return si
```
