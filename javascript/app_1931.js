const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let n = +input[0];
let times = [];
for(let i = 1; i <= n; i++){
    times[i-1] = [];
    times[i-1].push(...input[i].split(" ").map(e => +e));
}
function solution(){
    let num = 0;
    let currentEndTime = 0;
    times = times.sort((a,b) => a[0] - b[0]);
    times = times.sort((a,b) => a[1] - b[1]);
    for(let i = 0; i < n; i++){
        if(times[i][0] >= currentEndTime){
            num++;
            currentEndTime = times[i][1];
        }
    }
    return num;
}



console.log(solution());