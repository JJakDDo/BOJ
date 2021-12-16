const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let number = input.shift().split("").map(e => +e).sort((a,b) => b-a);
let output = [];
let visitied = Array(number.length).fill(false);
let answer = -1;

function solution(count){
    if(count == number.length){
        if(output.join("")%30 == 0){
            answer = output.join("");
        }
        return;
    }
    for(let i = 0; i < number.length; i++){
        if(!visitied[i]){
            visitied[i] = true;
            output.push(number[i]);
            solution(count+1);
            output.pop();
            visitied[i] = false;
        }
        if(answer != -1){
            return;
        }
    }
}
solution(0);
console.log(answer);