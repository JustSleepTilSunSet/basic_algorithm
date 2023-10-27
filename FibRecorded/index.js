let records = {};
function fib(idx) {
    if(idx in records){
        return records[idx];
    }
    if (idx == 0 || idx == 1) {
        records[idx] = 1;
        return 1;
    }
    records[idx] = fib(idx - 1) + fib(idx - 2);
    return records[idx];
}

console.log(fib(5));
console.log(records);