const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const N = input.shift();

function GCD(a, b){
    if(a % b == 0){
        return b;
    } else {
        return GCD(b, a % b);
    }
}
function solution(n, testCase){
    for(let i = 0; i < n; i++){
        const a = testCase[i].split(" ")[0];
        const b = testCase[i].split(" ")[1];
        const gcd = GCD(a, b);
        console.log(a * b / gcd);
    }
}
solution(N, input);