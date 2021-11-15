const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');


function solution(testCase){
    const t = testCase.split("");
    const answer = Array(26).fill(-1);
    t.forEach((element, idx) => {
        if(answer[element.codePointAt(0) - 97] == -1){
            answer[element.codePointAt(0) - 97] = idx;
        }
    });
    console.log(answer.join(" "));
}
solution(input[0]);