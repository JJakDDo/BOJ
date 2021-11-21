const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let n = +input[0];
let t = [];
let p = [];
for(let i = 1; i <= n; i++){
    t[i-1] = +input[i].split(" ")[0];
    p[i-1] = +input[i].split(" ")[1];
}

let output = [];
let answer = 0;
function solution(currentDate = 0, max = 0){
    for(let i = currentDate; i < n; i++){
        let pay = 0;
        if(i + t[i] <= n){
            pay = p[i] + max;
            solution(i + t[i], pay);
        }
        
        answer = Math.max(answer, pay);
    }
}
solution();
console.log(answer);