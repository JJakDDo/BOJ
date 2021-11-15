const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');


function solution(testCase){
    console.log(Math.floor(testCase / 5) + Math.floor(testCase / 25) + Math.floor(testCase / 125));
}
solution(+input[0]);

