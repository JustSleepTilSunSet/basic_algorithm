const graph = {
    A: { A: 0, B: 1, C: 4 },
    B: { B: 0, A: 1, C: 2, D: 7 },
    C: { C: 0, A: 4, B: 2, D: 1 },
    D: { D: 0, B: 5, C: 1 }
};
let cpyGraph = Object.assign({}, graph);
const allNodesLabel = Object.keys(graph);
const INF_DISTANCE = Math.pow(2, 31);

let paths = [];
let costs = [];
let pathIdx = 0;
let starting = "A";
let ending = "D";
/**
 * 
 * @param {String} start 
 * @param {String} end 
 */
function updated(start, end, cost) {
    let current = cpyGraph[start]; //Node type.
    if (start == end) {
        console.log("The point is original point.");
        cpyGraph[start][end] = 0;
        return;
    }
    let dsts = Object.keys(current); // tag type.
    // cpyGraph[start][start] = 0;
    for (let dst of dsts) {
        if (dst == end) {
            paths.push(dst);
            cost += current[end];
            costs.push(cost);
            // The minial cost in the path will be overwtited.
            // cpyGraph[starting][ending] = Math.min(cpyGraph[starting][ending] != undefined ? cpyGraph[starting][ending] : INF_DISTANCE,cost);
            // cpyGraph[starting][ending] = cost;
            // cpyGraph[ending][starting] = cpyGraph[starting][ending];
        }
        if (!paths.includes(dst)) {
            paths.push(dst);
            updated(dst, end, cost + current[dst]);
            paths.pop();
        }
    }
}

updated(starting, ending, 0);
console.log(Math.min(...costs));
cpyGraph[starting][ending] = Math.min(...costs);
cpyGraph[ending][starting] = Math.min(...costs);
console.log(cpyGraph);