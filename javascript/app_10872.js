const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');

function factorial(a){
    if(a <= 1){
        return 1;
    } else {
        return a * factorial(a-1);
    }
}
function solution(testCase){
    console.log(factorial(testCase));
}
solution(+input[0]);