let data = [6, 5, 3, 1, 8, 7, 2, 4];
function ForLoopBubbleSort(data) {
    for (let idx = 0; idx < data.length; idx++) {
        for (let next = idx + 1; next < data.length; next++) {
            if (data[next] <= data[idx]) {
                let tp = data[idx];
                data[idx] = data[next];
                data[next] = tp;
            }
        }
    }
    return data;
}
console.log('for ', ForLoopBubbleSort(data));


let data2 = [6, 5, 3, 1, 8, 7, 2, 4];
function RecursiveBubbleSort(start, next) {
    if (start >= data2.length || next >= data2.length) {
        return;
    }
    if (data2[next] <= data2[start]) {
        let tp = data2[start];
        data2[start] = data2[next];
        data2[next] = tp;
        RecursiveBubbleSort(start, next + 1);
    }
    RecursiveBubbleSort(start + 1, next + 1);
}
RecursiveBubbleSort(0, 1);
console.log('Recursive ', data2);