let fs = require('fs');
let visability = [];
let MAXLENGTH = 4;
let SCENES = {
    GROUND: -1,
    ENEMY: 1
}
function createEnemy(prob, index) {
    if (index == MAXLENGTH) {
        return;
    }
    let roundThreshold = Math.random();
    if (roundThreshold <= prob) {
        visability.push(SCENES.ENEMY);
        createEnemy(-1, index + 1);
    } else {
        visability.push(SCENES.GROUND);
        createEnemy(prob + (1 / MAXLENGTH), index + 1);
    }
}

let mem = fs.readdirSync(__dirname).includes("mem.json") ? require('./mem.json') : {};

let actionsDigit = {
    0: 'IDLE',
    1: 'JUMP'
}

let actions = {
    'IDLE': 0,
    'JUMP': 1
}

function reflectToEnemy(meet) {
    try {
        let roundKey = Math.random();
        let strategy = actions.IDLE;
        console.log(`I think.....`);
        for (let key of Object.keys(actionsDigit)) {
            let doSubset = Object.values(mem[`Meet_${meet}`][`Do_${key}`]);
            let cases = doSubset.reduce((total, currentValue) => total + currentValue, 0);
            if (!cases) {
                console.log(`Invalid actions.`);
                throw new Error();
            }
            console.log("Meet %d do %d failprob %d successprob %d", meet, key, mem[`Meet_${meet}`][`Do_${key}`].F / cases, mem[`Meet_${meet}`][`Do_${key}`].S / cases);
            if ((mem[`Meet_${meet}`][`Do_${key}`].S / cases) > roundKey) {
                strategy = actions[actionsDigit[key]];
                console.log('Round key: %d, We do %s.', roundKey, actionsDigit[key]);
            }
        }

        return strategy;
    } catch (err) {
        return Math.round(Math.random());
    }
}

function initializeMem() {
    let result = {};
    Object.values(actions).map((act) => {
        result[`Do_${act}`] = {};
        result[`Do_${act}`].F = 0;
        result[`Do_${act}`].S = 0;
    });
    return result
}

function main() {
    let dinoStep = 0;
    createEnemy(0.25, 0);
    while (dinoStep != 100) {
        let meet = visability[dinoStep % MAXLENGTH];
        let think = reflectToEnemy(meet);
        let doning = actionsDigit[think];
        console.log('Step%d Meet %s reflect: %s', dinoStep, meet, doning);
        if (mem[`Meet_${meet}`] == undefined) {
            mem[`Meet_${meet}`] = initializeMem();
        }

        if (visability[dinoStep % MAXLENGTH] == SCENES.ENEMY && think != actions.JUMP) {
            mem[`Meet_${meet}`][`Do_${think}`].F++;
            break;
        } else {
            mem[`Meet_${meet}`][`Do_${think}`].S++;
            console.log(`Pass`)
        }
        if (visability.length == 0)
            createEnemy((1 / MAXLENGTH), 0);
        dinoStep++;
    }
    fs.writeFileSync(`${__dirname}\\mem.json`, JSON.stringify(mem, null, 2));
}
main();