const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');


function solution(testCase){
    const suffix = [];
    testCase = testCase.split("");
    while(testCase.length){
        suffix.push(testCase.join(""));
        testCase.shift();
    }
    console.log(suffix.sort().join(" "));
}
solution(input[0]);