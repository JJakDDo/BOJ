const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');


function GCD(a, b){
    if(a % b == 0){
        return b;
    } else {
        return GCD(b, a % b);
    }
}
function solution(testCase){
    const gcd = GCD(testCase[0], testCase[1]);
    console.log(gcd);
    console.log(testCase[0] * testCase[1] / gcd);
}
solution(input[0].split(" ").map(e => +e));