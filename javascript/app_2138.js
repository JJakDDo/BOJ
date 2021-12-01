const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let n = +input.shift();
let current = input.shift().split("").map(e => +e);
let end = input.shift().split("").map(e => +e);
let d = [-1, 0, 1];

function solution(){
    let sum = 0;
    let i;
    if(current[0] != end[0]){
        i = 1;
    } else {
        i = 0;
    }
    
    for(; i < n; i++){
        let change = false;
        for(let j = 0; j < 3; j++){
            const dc = i + d[j];
            if(dc >= 0 || dc < n){
                if(current[dc] != end[dc]){
                    change = true;
                }
            }
        }
        if(change){            
            for(let j = 0; j < 3; j++){
                const dc = i + d[j];
                if(dc >= 0 && dc < n){
                    current[dc] = current[dc] == 0?1:0;
                }
            }
            if(i-1 >= 0){
                if(current[i-1] != end[i-1]){
                    sum = -1;
                    break;
                }
            }
            sum++;
        }
    }
    return sum;
}



console.log(solution());