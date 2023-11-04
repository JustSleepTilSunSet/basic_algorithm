/**
 * BFS
 */
let maze = [// The maze must be a square matrix.
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1],
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
        this.isInvalid = rowIdx <= 0 && colIdx <= 0;
    }
}
let start = new Point(1, 0);
let end = new Point(1, 3);
let records = [];
let isFound = false;

function go(start) {
    let basic = Object.assign(start);
    let isFound = false;
    let strategies = [];
    while (!isFound) {
        let toLeft = basic.horizontal - 1 < 0 || maze[basic.vertical][basic.horizontal - 1] == 1 ? new Point(-1, -1) : new Point(basic.vertical, basic.horizontal - 1);
        let toRight = basic.horizontal + 1 >= MAZE_SIZE.W || maze[basic.vertical][basic.horizontal + 1] == 1 ? new Point(-1, -1) : new Point(basic.vertical, basic.horizontal + 1);
        let toUp = basic.vertical - 1 < 0 || maze[basic.vertical - 1][basic.horizontal] == 1 ? new Point(-1, -1) : new Point(basic.vertical - 1, basic.horizontal);
        let toDown = basic.vertical + 1 >= MAZE_SIZE.H || maze[basic.vertical + 1][basic.horizontal] == 1 ? new Point(-1, -1) : new Point(basic.vertical + 1, basic.horizontal);
        isFound = (toLeft.vertical == end.vertical && toLeft.horizontal == end.horizontal)
            || (toRight.vertical == end.vertical && toRight.horizontal == end.horizontal)
            || (toUp.vertical == end.vertical && toUp.horizontal == end.horizontal)
            || (toDown.vertical == end.vertical && toDown.horizontal == end.horizontal)
        console.log('toLeft ', toLeft);
        console.log('toRight ', toRight);
        console.log('toUp ', toUp);
        console.log('toDown ', toDown);
        console.log('isFound ', isFound);
        if (!toLeft.isInvalid) {
            maze[toLeft.vertical][toLeft.horizontal] = 1;
            strategies.push(toLeft);
            records.push(toLeft);
        }
        if (!toRight.isInvalid) {
            console.log('running');
            maze[toRight.vertical][toRight.horizontal] = 1;
            strategies.push(toRight);
            records.push(toRight);
        }
        if (!toUp.isInvalid) {
            maze[toUp.vertical][toUp.horizontal] = 1;
            strategies.push(toUp);
            records.push(toUp);
        }
        if (!toDown.isInvalid) {
            maze[toDown.vertical][toDown.horizontal] = 1;
            strategies.push(toDown);
            records.push(toDown);
        }
        basic = strategies.shift();
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