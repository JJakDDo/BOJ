const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let n = +input.shift();
let current = input.shift().split("").map(e => +e);
let end = input.shift().split("").map(e => +e);
let d = [-1, 0, 1];

function solution(changeFirst, copyCurrent){
    let sum = 0;

    if(changeFirst){
        sum += 1;        
        for(let j = 1; j < 3; j++){
            copyCurrent[d[j]] = copyCurrent[d[j]] == 0?1:0;
        }
    }
    
    for(let i = 1; i < n; i++){
        let change = false;
        if(copyCurrent[i-1] != end[i-1]){
            change = true;
        }
        if(change){            
            for(let j = 0; j < 3; j++){
                const dc = i + d[j];
                if(dc >= 0 && dc < n){
                    copyCurrent[dc] = copyCurrent[dc] == 0?1:0;
                }
            }
            sum++;
        }
    }
    return copyCurrent.join("") == end.join("")?sum:-1;
}

let output = -1;
let answer1 = solution(true, current.slice(0));
if(answer1 != -1){
    output = answer1;
}
let answer2 = solution(false, current.slice(0));
if(answer2 != -1){
    output = output==-1?answer2:Math.min(answer2, output);
}

console.log(output);