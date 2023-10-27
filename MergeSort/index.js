// let data = new Array(20).fill(0).map(() => Math.round(Math.random() * 10));

let data = [6, 5, 3, 1, 8, 7, 2, 4];
function mergeSort(numlist, flag) {
    let data = numlist;
    let middle = Math.floor(data.length / 2);
    if (numlist.length <= 1) {
        console.log(flag + '切完了');
        return numlist;
    }
    //左半
    let left = ((data) => {
        let left = [];
        for (let idx = 0; idx < middle; idx++) {
            left.push(data[idx]);
        }
        return left
    })(data);

    //右半
    let right = ((data) => {
        let right = [];
        for (let idx = middle; idx < data.length; idx++) {
            right.push(data[idx]);
        }
        return right
    })(data);
    console.log("左半: %j", left);
    console.log("右半: %j", right);
    let L = mergeSort(left, "左半");
    let R = mergeSort(right, "右半");
    return merge(L, R, flag+"整合: ");
}

function merge(left, right, flag) {
    if (!left || !right)
        return;
    let result = [];
    let rIdx = 0;
    let leftIdx = 0;
    let rightIdx = 0;
    while (left[leftIdx] != undefined && right[rightIdx] != undefined) {
        if (left[leftIdx] >= right[rightIdx] || right[rIdx] == undefined) {
            result[rIdx] = left[leftIdx];
            leftIdx++;
        }
        if (left[leftIdx] < right[rightIdx] || left[rIdx] == undefined) {
            result[rIdx] = right[rightIdx];
            rightIdx++;
        }
        rIdx++;
    }
    while (left[leftIdx] != undefined) {
        result[rIdx] = left[leftIdx];
        leftIdx++;
        rIdx++;
    }
    while (right[rightIdx] != undefined) {
        result[rIdx] = right[rightIdx];
        rightIdx++;
        rIdx++;
    }
    console.log(flag,result);
    return result;
}
mergeSort(data);
// merge([8,7,4,2],[6,5,3,1]);
// console.log(data);