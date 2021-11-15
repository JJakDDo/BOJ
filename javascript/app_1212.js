const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');


function solution(testCase){
    const s = testCase.split("");
    let answer = "";
    s.forEach((elem, idx) => {
        if(idx != 0){
        answer += parseInt(elem, 10).toString(2).padStart(3, '0');
        } else {
        answer += parseInt(elem, 10).toString(2);
        }
    });
    console.log(answer);
}
solution(input[0]);