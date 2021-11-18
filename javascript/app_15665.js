const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let n = +input[0].split(" ")[0];
let m = +input[0].split(" ")[1];
let inputNum = input[1].split(" ").map(e => +e).sort((a,b) => a-b);

let output = [];
let answer = [];
let answerCount = 0;

function solution(num, count){
    if(count == m){
        answer[answerCount++] = [...output];
        return;
    }
    for(let i = num; i < n; i++){
        output[count] = inputNum[i];
        solution(num, count+1);
        output[count] = "";
    }
}
solution(0, 0);
const set = new Set(answer.map(e => e.join(" ")));
console.log([...set].join("\n"));

