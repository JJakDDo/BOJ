const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const s = input.shift().split(" ").map(e => +e);
const d = input[0].split(" ").map(e => +e);

function GCD(a, b){
    if(a % b == 0){
        return b;
    } else {
        return GCD(b, a % b);
    }
}
function solution(N, S, A){
    const diff = A.map(e => Math.abs(e-S));
    if(N == 1){
        console.log(diff[0]);
    } else {
        console.log(diff.reduce((acc, elem) => {
            acc = GCD(acc, elem);
            return acc;
        }));
    }    
}
solution(s[0], s[1], d);