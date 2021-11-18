const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let n = +input[0].split(" ")[0];
let m = +input[0].split(" ")[1];

let output = [];
let answer = "";

function solution(num){
    if(output.length == m){
        answer += `${output.join(" ")}\n`;
        return;
    }
    for(let i = num; i <= n; i++){
        output.push(i);
        solution(i);
        output.pop();
    }
}
solution(1);
console.log(answer);