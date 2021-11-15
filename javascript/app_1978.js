const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const N = input.shift();

function isPrime(a){
    if(a == 1){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(a); i++){
        if(a % i == 0){
            return false;
        }
    }
    return true;
}
function solution(n, testCase){
    const t = testCase.split(" ");
    let answer = 0;
    for(let i = 0; i < n; i++){
        if(isPrime(t[i])){
            answer++;
        }
    }
    console.log(answer);
}
solution(N, input[0]);