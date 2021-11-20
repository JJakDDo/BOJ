const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let l = +input[0].split(" ")[0];
let c = +input[0].split(" ")[1];
let char = input[1].split(" ").sort();

let output = [];
let answer = "";
function solution(num, count){
    if(count == l && output.join("").match(/[aeiou]/) && output.join("").match(/[^aeiou]/g)){
        if(output.join("").match(/[^aeiou]/g).length >= 2){
            answer += `${output.join("")}\n`;
        }
        return;
    }
    for(let i = num; i < c; i++){
        output.push(char[i]);
        solution(i+1, count+1);
        output.pop();
    }
}
solution(0, 0);
console.log(answer.trim());