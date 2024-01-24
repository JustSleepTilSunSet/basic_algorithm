const graph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
};
let cpyGraph = Object.assign({}, graph);
const allNodesLabel = Object.keys(graph);
let labelIdx = 0;
const INF_DISTANCE = Math.pow(2, 31);

/**
 * To initalize raw graph.
 * @param {String} currLabel current label.
 * @param {String} labelIdx global label index.
 * @returns void The functino will update to cpyGraph.
 */
function initialize(currLabel, labelIdx) {
    if (labelIdx > allNodesLabel.length) {
        return;
    }
    for (let dst of allNodesLabel) {
        if (currLabel == dst) {
            cpyGraph[currLabel][dst] = 0;
            continue;
        }
        if (cpyGraph[currLabel][dst] == undefined) {
            cpyGraph[currLabel][dst] = INF_DISTANCE;
        }
    }
    let nextLabel = allNodesLabel[labelIdx];
    labelIdx++;
    return initialize(nextLabel, labelIdx);
}

/**
 * 
 * @param {String} start 
 * @param {String} end 
 */
function updated(start, end) {
    let currNode = cpyGraph[start];
    let minCost = INF_DISTANCE;
    if (start == end) {
        cpyGraph[start][end] = 0;
        return;
    }
    for (let dst of Object.keys(currNode)) {
        if (start == dst) {
            continue;
        }

        if (cpyGraph[dst][end] != undefined && minCost > cpyGraph[dst][end] + cpyGraph[start][dst]) {
            minCost = cpyGraph[dst][end] + cpyGraph[start][dst];
            cpyGraph[start][end] = minCost;
            cpyGraph[end][start] = minCost;
            console.log(dst, " connected ", end, 'updated to ', minCost);
        }
    }
    return;
}


updated("A", "D");
updated("A", "C");
updated("A", "D");
// updated("A", "A");
// updated("A", "F");
console.log(cpyGraph);