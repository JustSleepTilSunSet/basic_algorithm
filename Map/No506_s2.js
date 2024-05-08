/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let tmpScore = Object.assign([],score);
    let result = [];
    let map = {};
    let rank = 1;
    score.sort((a, b) => a - b );
    // console.log(tmpScore);
    // console.log(score);
    for(let idx = score.length - 1;idx>=0;idx--){
        map[score[idx]] = rank++;
    }
    for(let value of tmpScore){
        let getRk = map[value];
        if(getRk==1){
            result.push("Gold Medal");
        }
        else if(getRk==2){
            result.push("Silver Medal");
            }
        else if(getRk==3){
            result.push("Bronze Medal");
            }
        else{
            result.push(getRk+"");
        }
        // "Gold Medal","Silver Medal","Bronze Medal"
    }
    // console.log(map);
    return result;
};