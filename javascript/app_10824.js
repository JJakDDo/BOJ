const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');


function solution(testCase){
    testCase = testCase.split(" ");
    const front = +(testCase[0] + testCase[1]);
    const back = +(testCase[2] + testCase[3]);
    console.log(front + back);
}
solution(input[0]);