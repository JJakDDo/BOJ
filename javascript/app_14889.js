const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let n = +input[0];
let s = [];
for(let i = 1; i <= n; i++){
    s[i-1] = [];
    for(let j = 0; j < n; j++){
        s[i-1][j] = +input[i].split(" ")[j];
    }
}
let output = [];
let pointOutput = [];
let answer = [];
let ind = 0;
let min = 99999;
function point(num, count, index){
    if(count == 2){
        answer[index] += s[pointOutput[0]][pointOutput[1]] + s[pointOutput[1]][pointOutput[0]];
        return;
    }
    for(let i = num; i < output.length; i++){
        pointOutput.push(output[i]);
        point(i+1, count+1, index);
        pointOutput.pop();
    }
}

function solution(num, count){
    if(count == n / 2){
        answer.push(0);
        point(0, 0, ind++);
        return;
    }

    for(let i = num; i < n; i++){
        output.push(i);
        solution(i+1, count+1);
        output.pop(i);
    }
}
solution(0,0);
for(let i = 0; i < answer.length / 2; i++){
    min = Math.min(Math.abs(answer[i] - answer[answer.length-i-1]), min);
}
console.log(min);