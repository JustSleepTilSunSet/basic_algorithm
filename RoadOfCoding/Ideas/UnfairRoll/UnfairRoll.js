// Unfair Roll
function UnfairRoll(){
    let candidates = ["hh0","hh1","hh2","hh3","hh4"];
    let weight = [1,11,11,1,1]; // 11 is for precisly roll.
    let priority =  weight.map(w => Math.floor(Math.random() * 10 + 1) * w);
    let result = [];
    for(let rollTimes = 0; rollTimes<2;rollTimes++){
      let max = 0;
      let maxIdx = 0;
      for(let personIdx = 0 ;personIdx<priority.length;personIdx++){
        if(max < priority[personIdx]){
          max = priority[personIdx];
          maxIdx = personIdx;
        }
      }
      console.log("抽出: "+ candidates[maxIdx]);
      result.push(maxIdx);
      priority[maxIdx] = 0;
    }
    return result;
  }
  
  UnfairRoll();