const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');

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
function solution(testCase){
    testCase = testCase.slice(0, -1).map(e => +e);
    testCase.forEach((num) => {
        if(num != ""){
            for(let i = 3; i <= num/2; i++){
                if(isPrime(i) && isPrime(num - i)){
                    console.log(`${num} = ${i} + ${num - i}`);
                    break;
                }
            }
        }
        
    });
}
solution(input);