const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');


function solution(testCase){
    const t = testCase.split("");
    const answer = Array(26).fill(0);
    t.forEach(element => {
        answer[element.codePointAt(0) - 97]++;
    });
    console.log(answer.join(" "));
}
solution(input[0]);