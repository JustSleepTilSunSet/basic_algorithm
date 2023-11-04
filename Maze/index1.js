/**
 * DFS
 */
let maze = [// The maze must be a square matrix.
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 0, 1]
]
let clone_maze = Object.assign([], maze);
let MAZE_SIZE = {
    H: maze.length,
    W: maze[0].length
}
let PASSING = 3;
class Point {
    constructor(rowIdx, colIdx) {
        this.vertical = rowIdx;
        this.horizontal = colIdx;
    }
}
let start = new Point(1, 0);
let end = new Point(1, 3);
let records = [];
let isFound = false;

/**
 * In the sample, the start point never to move backward.
 * @param {Point} step 
 * @param {Point} next 
 */
function go(step) {
    if(isFound){
        return;
    }
    console.log('step:', step);
    if ((step.vertical < 0 || step.vertical >= MAZE_SIZE.H) || (step.horizontal < 0 || step.horizontal >= MAZE_SIZE.W)){
        console.log(`I move to border.`);
        return;
    }
    if (maze[step.vertical][step.horizontal] == 0) {
        records.push(new Point(step.vertical, step.horizontal));
    }
    if (maze[step.vertical][step.horizontal] == 1) {
        console.log('Im on rocks: %d %d', step.vertical, step.horizontal);
        return;
    } else if ((step.vertical == end.vertical && step.horizontal == end.horizontal)) {
        console.log(`I found exit.`);
        isFound = true;
        return;
    } else {
        maze[step.vertical][step.horizontal] = 1;
        go(new Point(step.vertical + 1, step.horizontal));
        go(new Point(step.vertical, step.horizontal + 1));
        go(new Point(step.vertical - 1, step.horizontal));
        go(new Point(step.vertical, step.horizontal - 1));
    }
}

function showPathing(records) {
    for (let path of records) {
        clone_maze[path.vertical][path.horizontal] = PASSING;
    }
    console.log('Passing path:', records);
    console.log(clone_maze);

}

console.log(`Exit position ${end.vertical},${end.horizontal}`);
go(start);
showPathing(records);