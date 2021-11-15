const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const f = input[0].split(" ")[0];
const s = input[0].split(" ")[1];

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
function solution(a, b){
    for(let i = a; i <= b; i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}
solution(+f, +s);