let _data = [6, 5, 3, 1, 8, 7, 2, 4];
function SelectedSort(_data) {
    let data = Object.assign([], _data);// Replacement by Object clone on other lang. .
    for (let dataIdx = 0; dataIdx < data.length; dataIdx++) {
        let min = data[dataIdx];
        let minIdx = dataIdx;
        for (let next = dataIdx + 1; next < data.length; next++) {
            if (data[next] < min) {
                minIdx = next;
                min = data[next];
            }
        }

        if (minIdx > dataIdx) {// Elment found a minimum from forawrd array.
            let tp = data[minIdx];
            data[minIdx] = data[dataIdx];
            data[dataIdx] = tp;
        }
    }
    return data;
}
console.log(SelectedSort(_data));
console.log(_data);